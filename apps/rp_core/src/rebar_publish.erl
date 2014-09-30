-module(rebar_publish).

-export([update/4,
         handle_repo/2]).

-include_lib("erlcloud/include/erlcloud.hrl").
-include_lib("erlcloud/include/erlcloud_aws.hrl").
-include_lib("kernel/include/file.hrl").

-define(CHUNK_SIZE, 5242880).

update(_State, Arch, ErtsVsn, GlibcVsn) ->
    Query =
        io_lib:format("erts: [0 TO ~s] AND (arch: generic OR (arch: ~s AND glibc: ~s))", [ErtsVsn
                                                                                         ,Arch
                                                                                         ,GlibcVsn]),


    {200, _Headers, [{<<"count">>, _Count}
                    ,{<<"total_count">>, _Total}
                    ,{<<"results">>, Results} | _]} = orchestrate_client:search("packages", Query, 0, 100),

    lists:foldl(fun(X, {PackageDict, GraphAcc}) ->
                        App = proplists:get_value(<<"value">>, X, []),
                        Name = proplists:get_value(<<"name">>, App, ""),
                        Vsn = proplists:get_value(<<"vsn">>, App, ""),
                        Deps = proplists:get_value(<<"deps">>, App, []),
                        {dict:store({Name, Vsn}, App, PackageDict)
                        ,rlx_depsolver:add_package(GraphAcc, Name, [{Vsn, Deps}])}
                end, {dict:new(), rlx_depsolver:new_graph()}, Results).


handle_repo(State, Repo) ->
    % Setup directories for building
    TmpDir = ec_file:insecure_mkdtemp(),
    Dir = filename:join(TmpDir, "repo"),
    ok = file:make_dir(Dir),
    ok = file:set_cwd(Dir),

    % Fetch
    os:cmd("git clone " ++ Repo ++ " ."),

    Tags = string:tokens(os:cmd("git tag"), "\n"),

    lists:foreach(fun(Tag) ->
                          os:cmd("git checkout -q " ++ Tag),
                          os:cmd("git reset --hard HEAD"),
                          os:cmd("git clean -xdf"),
                          upload_src(Dir, State, Tag)
                          %handle_apps(Dir, State)
                  end, Tags).

handle_apps(Dir, State) ->
    lists:foreach(fun(Image) ->
                          handle_apps(Dir, State, Image)
                  end, rp_state:images(State)).

upload_src(Dir, State, Tag) ->
    Bucket = rp_state:bucket(State),
    Collection = rp_state:collection(State),
    S3Creds = rp_state:s3(State),

    SrcApps = rp_app_discovery:get_src_apps(State, [<<".">>], Tag),

    % Build tarballs and upload to s3
    lists:foreach(fun(App) ->
                          upload_app(App, Collection, S3Creds, Bucket)
                  end, SrcApps).

handle_apps(Dir, State, Image) ->
    Bucket = rp_state:bucket(State),
    Collection = rp_state:collection(State),
    S3Creds = rp_state:s3(State),

    SrcApps = rp_app_discovery:get_src_apps(State, [<<".">>]),

    % Build tarballs and upload to s3
    lists:foreach(fun(App) -> upload_app(App, Collection, S3Creds, Bucket) end, SrcApps),

    % Build
    ok = rp_docker:run_build(Dir, Image),

    % Collect apps to publish
    Apps = rp_app_discovery:get_apps(State, [<<"deps">>, <<".">>]),

    % Build tarballs and upload to s3
    lists:foreach(fun(App) -> upload_app(App, Collection, S3Creds, Bucket) end, Apps).

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
    ok = upload_tarball(Filename, Key, S3Creds, Bucket),

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
