-module(rebar_publish).

-export([update/1,
         handle_repo/2]).

-include_lib("kernel/include/file.hrl").

-define(BUCKET, "rebar_packages").
-define(CHUNK_SIZE, 5242880).

update(State) ->
    ErtsVsn = rp_state:erts_vsn(State),
    Query = io_lib:format("erts: [0 TO ~s]", [ErtsVsn]),

    %% {200, _Headers, {[{<<"count">>, _Count},
    %%                  {<<"total_count">>, _Total},
    %%                  {<<"results">>, Results},
    %%                  {<<"next">>, _}]}} =
        orchestrate_client:search("packages", Query).
    %% lists:map(fun({X}) ->
    %%                   element(1, proplists:get_value(<<"value">>, X))
    %%           end, Results).

handle_repo(State, Repo) ->
    % Setup directories for building
    TmpDir = ec_file:insecure_mkdtemp(),
    Dir = filename:join(TmpDir, "repo"),
    ok = file:make_dir(Dir),
    ok = file:set_cwd(Dir),
    lager:info("Dir ~p~n", [Dir]),
    % Fetch
    os:cmd("git clone " ++ Repo ++ " ."),

    Tags = string:tokens(os:cmd("git tag"), "\n"),

    lists:foreach(fun(Tag) ->
                          os:cmd("git checkout -q " ++ Tag),
                          os:cmd("git reset --hard HEAD"),
                          handle_apps(Dir, State)
                  end, Tags).

handle_apps(Dir, State) ->
    lists:foreach(fun(Image) ->
                          handle_apps(Dir, State, Image)
                  end, rp_state:images(State)).

handle_apps(Dir, State, Image) ->
    LogState = rp_state:log_state(State),
    S3 = rp_state:s3(State),

    % Build
    ok = rp_docker:run_build(Dir, Image),

    % Collect apps to publish
    Apps = rp_app_discovery:get_apps(State, [<<"deps">>, <<"..">>]),

    % Build tarballs and upload to s3
    lists:foreach(fun(App) ->
                          AppNameVsn = rp_app_info:name_vsn_string(App),
                          AppDir = rp_app_info:dir(App),
                          Key = rp_app_info:key(App),
                          Filename = AppNameVsn++".tar.gz",

                          % Create Archive, pruning out deps dir and .git
                          Files = [{filename:join(AppNameVsn, X), X}
                                  || X <- filelib:wildcard("**", binary_to_list(AppDir))
                                         ,hd(filename:split(X)) =/= "deps"
                                         ,hd(filename:split(X)) =/= ".git"],
                          erl_tar:create(Filename
                                        ,Files
                                        ,[compressed]),

                          % Upload arhive
                          lager:info("at=publishing app=~s", [AppNameVsn]),
                          upload(Filename, binary_to_list(Key), S3, ?BUCKET),

                          % Create and upload package to datastore
                          PackageJson = rp_app_info:json(App),

                          orchestrate_client:kv_put("packages", Key, PackageJson)
                  end, Apps).

-spec upload(file:name(), string(), tuple(), string()) -> ok.
upload(Filename, Key, S3, Bucket) ->
    case file:read_file_info(Filename) of
        {ok, #file_info{size=Size}} when Size < 1073741824 ->
            try
                {ok, Data} = file:read_file(Filename),
                erlcloud_s3:put_object(Bucket, Key, [Data], S3),
                lager:info("at=completed_upload_to_s3 key=~s", [Key])
            catch
                C:T ->
                    lager:error("at=failed_upload_to_s3 key=~s error=~p reason=~p", [Key, C, T])
            end;
        _ ->
            {ok, Fd} = file:open(Filename, [read, raw]),
            {ok, [{uploadId, UploadId}]} = erlcloud_s3:start_multipart(Bucket
                                                                      ,Key
                                                                      ,[]
                                                                      ,[]
                                                                      ,S3),
            try
                Etags = upload(Fd, Key, UploadId, S3, Bucket, 1, [], file:read(Fd, ?CHUNK_SIZE)),
                erlcloud_s3:complete_multipart(Bucket, Key, UploadId, Etags, [], S3),
                lager:info("at=completed_upload_to_s3 key=~s", [Key])
            catch
                C:T ->
                    lager:error("at=failed_upload_to_s3 key=~s error=~p reason=~p", [Key, C, T]),
                    erlcloud_s3:abort_multipart(Bucket, Key, UploadId, [], [], S3)
            after
                file:close(Fd)
            end
    end.

upload(_Fd, _Key, _UploadId, _S3, _Bucket, _, Etags, eof) ->
    lists:reverse(Etags);
upload(Fd, Key, UploadId, S3, Bucket, PartNumber, Etags, {ok, Data}) ->
    {ok, [{etag, Etag}]} = erlcloud_s3:upload_part(Bucket
                                                  ,Key
                                                  ,UploadId
                                                  ,PartNumber
                                                  ,Data
                                                  ,[]
                                                  ,S3),
    upload(Fd, Key, UploadId, S3, Bucket, PartNumber+1,
           [{PartNumber, Etag} | Etags], file:read(Fd, ?CHUNK_SIZE)).
