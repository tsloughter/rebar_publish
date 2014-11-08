-module(rebar_publish).

-export([handle_repo/1,
         handle_repo/4,
         handle_repo/2]).

-include_lib("erlcloud/include/erlcloud.hrl").
-include_lib("erlcloud/include/erlcloud_aws.hrl").
-include_lib("kernel/include/file.hrl").

-define(CHUNK_SIZE, 5242880).

handle_repo(Repo) ->
    {ok, AccessId} = application:get_env(rp_core, s3_access_id),
    {ok, SecretKey} = application:get_env(rp_core, s3_secret_key),

    S3Creds = application:get_env(rp_core, s3_creds, erlcloud_s3:new(AccessId, SecretKey)),

    Collection = application:get_env(rp_core, collection, ""),
    Bucket = application:get_env(rp_core, bucket, ""),
    Images = application:get_env(rp_core, images, []),
    handle_repo(rp_state:new(Bucket, S3Creds, Collection, Images), Repo).

handle_repo(Bucket, S3Creds, Collection, Repo) ->
    handle_repo(rp_state:new(Bucket, S3Creds, Collection), Repo).

handle_repo(State, Repo) ->
    % Setup directories for building
    {ok, Cwd} = file:get_cwd(),
    TmpDir = ec_file:insecure_mkdtemp(),
    Dir = filename:join(TmpDir, "repo"),
    ok = file:make_dir(Dir),
    ok = file:set_cwd(Dir),

    % Fetch
    sh("git clone " ++ Repo ++ " .", [use_stdout]),

    Tags = string:tokens(os:cmd("git tag"), "\n"),

    lists:foreach(fun(Tag) ->
                          os:cmd("git checkout -q " ++ Tag),
                          os:cmd("git reset --hard HEAD"),
                          os:cmd("git clean -xdf"),
                          %upload_src(State, Tag),
                          handle_apps(Dir, State)
                  end, Tags),
    ok = file:set_cwd(Cwd).

handle_apps(Dir, State) ->
    lists:foreach(fun(Image) ->
                          handle_apps(Dir, State, Image)
                  end, rp_state:images(State)).

handle_apps(Dir, State, Image) ->
    Bucket = rp_state:bucket(State),
    Collection = rp_state:collection(State),
    S3Creds = rp_state:s3(State),

    %SrcApps = rp_app_discovery:get_src_apps(State, [<<".">>]),

    % Build tarballs and upload to s3
    %lists:foreach(fun(App) -> upload_app(App, Collection, S3Creds, Bucket) end, SrcApps),

    % Build
    ok = run_build(Dir),

    % Collect apps to publish
    Deps = rp_app_discovery:get_apps(State, [<<"deps">>]),
    Apps = rp_app_discovery:get_apps(State, [<<".">>]),

    Deps1 = [{rp_app_info:name(App), rp_app_info:vsn(App)} || App <- Deps],

    % Build tarballs and upload to s3
    lists:foreach(fun(App) ->
                          App1 = rp_app_info:deps(App, Deps1),
                          upload_app(App1, Collection, S3Creds, Bucket)
                  end, Apps).

-spec upload_app(rp_app_info:t(), string(), aws_config(), string()) -> ok.
upload_app(App, Collection, S3Creds, Bucket) ->
    AppNameVsn = rp_app_info:name_vsn_string(App),
    AppDir = rp_app_info:dir(App),
    Key = rp_app_info:key(App),
    Filename = AppNameVsn++".tar.gz",

    % Create Archive, pruning out deps dir and .git
    ok = create_tarball(Filename, AppNameVsn, AppDir),

    % Upload arhive
    lager:info("at=publishing app=~s key=~s bucket=~s", [AppNameVsn, Key, Bucket]),
    %ok = upload_tarball(Filename, Key, S3Creds, Bucket),

    % Create and upload package to datastore
    PackageJson = rp_app_info:json(App),
    lager:info("~p~n", [orchestrate_client:kv_put(Collection, Key, PackageJson)]).

-spec create_tarball(file:name(), string(), file:name()) -> ok.
create_tarball(Filename, AppNameVsn, AppDir) ->
    Files = [{filename:join(AppNameVsn, X), X}
            || X <- filelib:wildcard("**", binary_to_list(AppDir))
                   ,hd(filename:split(X)) =/= "deps"
                   ,hd(filename:split(X)) =/= ".git"],
    erl_tar:create(Filename
                  ,Files
                  ,[compressed]).

-spec upload_tarball(file:name(), string(), tuple(), string()) -> ok.
upload_tarball(Filename, Key, S3, Bucket) ->
    case file:read_file_info(Filename) of
        {ok, #file_info{size=Size}} when Size < ?CHUNK_SIZE ->
            try
                {ok, Data} = file:read_file(Filename),
                erlcloud_s3:put_object(Bucket, Key, [Data], S3),
                lager:info("at=completed_upload_to_s3 key=~s", [Key])
            catch
                C:T ->
                    lager:error("at=failed_single_upload_to_s3 key=~s error=~p reason=~p", [Key, C, T])
            end;
        _ ->
            {ok, Fd} = file:open(Filename, [read, raw]),
            {ok, [{uploadId, UploadId}]} = erlcloud_s3:start_multipart(Bucket
                                                                      ,Key
                                                                      ,[]
                                                                      ,[]
                                                                      ,S3),
            try
                Etags = upload_tarball(Fd, Key, UploadId, S3, Bucket, 1, [], file:read(Fd, ?CHUNK_SIZE)),
                erlcloud_s3:complete_multipart(Bucket, Key, UploadId, Etags, [], S3),
                lager:info("at=completed_upload_to_s3 key=~s", [Key])
            catch
                C:T ->
                    lager:error("at=failed_multipart_upload_to_s3 key=~s error=~p reason=~p", [Key, C, T]),
                    erlcloud_s3:abort_multipart(Bucket, Key, UploadId, [], [], S3)
            after
                file:close(Fd)
            end
    end.

upload_tarball(_Fd, _Key, _UploadId, _S3, _Bucket, _, Etags, eof) ->
    lists:reverse(Etags);
upload_tarball(Fd, Key, UploadId, S3, Bucket, PartNumber, Etags, {ok, Data}) ->
    {ok, [{etag, Etag}]} = erlcloud_s3:upload_part(Bucket
                                                  ,Key
                                                  ,UploadId
                                                  ,PartNumber
                                                  ,Data
                                                  ,[]
                                                  ,S3),
    upload_tarball(Fd, Key, UploadId, S3, Bucket, PartNumber+1,
                   [{PartNumber, Etag} | Etags], file:read(Fd, ?CHUNK_SIZE)).

run_build(Dir) ->
    Cwd = file:get_cwd(),
    file:set_cwd(Dir),
    io:format("Dir ~p~n", [Dir]),
    sh("rebar get-deps compile", [use_stdout]),
    file:set_cwd(Cwd),
    ok.

sh(Command, Options0) ->

    Options = [expand_sh_flag(V)
               || V <- proplists:compact(Options0)],

    ErrorHandler = fun(_Command, Err) ->
                           io:format(Err)
                   end,
    OutputHandler = proplists:get_value(output_handler, Options),

    PortSettings = proplists:get_all_values(port_settings, Options) ++
        [exit_status, {line, 16384}, use_stdio, stderr_to_stdout, hide],

    Port = open_port({spawn, Command}, PortSettings),

    case sh_loop(Port, OutputHandler, []) of
        {ok, _Output} = Ok ->
            Ok;
        {error, {_Rc, _Output}=Err} ->
            ErrorHandler(Command, Err)
    end.

expand_sh_flag(use_stdout) ->
    {output_handler,
     fun(Line, Acc) ->
             io:format("~s", [Line]),
             [Line | Acc]
     end};
expand_sh_flag({use_stdout, false}) ->
    {output_handler,
     fun(Line, Acc) ->
             [Line | Acc]
     end};
expand_sh_flag({cd, _CdArg} = Cd) ->
    {port_settings, Cd};
expand_sh_flag({env, _EnvArg} = Env) ->
    {port_settings, Env}.

sh_loop(Port, Fun, Acc) ->
    receive
        {Port, {data, {eol, Line}}} ->
            sh_loop(Port, Fun, Fun(Line ++ "\n", Acc));
        {Port, {data, {noeol, Line}}} ->
            sh_loop(Port, Fun, Fun(Line, Acc));
        {Port, {exit_status, 0}} ->
            {ok, lists:flatten(lists:reverse(Acc))};
        {Port, {exit_status, Rc}} ->
            {error, {Rc, lists:flatten(lists:reverse(Acc))}}
    end.
