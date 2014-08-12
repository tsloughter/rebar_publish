-module(rebar_publish).

-export([do/1]).

-define(BUCKET, "rebar_packages").
-define(ACCESS_ID, "AKIAJBRG776SKWHJOAKQ").
-define(SECRET_KEY, "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").

do(Repo) ->
    LogState = ec_cmd_log:new(debug, command_line),
    orchestrate_client:set_apikey(<<"55d0232a-bb03-4785-996f-3d0f4070a347">>),

    S3 = erlcloud_s3:new(?ACCESS_ID, ?SECRET_KEY),
    SystemArch = list_to_binary(erlang:system_info(system_architecture)),
    ErtsVsn = list_to_binary(erlang:system_info(version)),
    {glibc, GlibcVsn, _, _} = erlang:system_info(allocator),
    GlibcVsnStr = list_to_binary(io_lib:format("~p.~p", GlibcVsn)),

    State = rp_state:new(LogState, ErtsVsn, SystemArch, GlibcVsnStr),

    % Setup directories for building
    TmpDir = ec_file:insecure_mkdtemp(),
    Dir = filename:join(TmpDir, "repo"),
    ok = file:make_dir(Dir),
    ok = file:set_cwd(Dir),

    % Fetch
    os:cmd("git clone " ++ Repo ++ " ."),

    % Build
    os:cmd("rebar get-deps compile -r"),

    % Collect apps to publish
    Apps = rp_app_discovery:get_apps(State, [<<"deps">>, <<"..">>]),

    % Build tarballs and upload to s3
    lists:foreach(fun(App) ->
                          AppNameVsn = rp_app_info:name_vsn_string(App),
                          AppDir = rp_app_info:dir(App),
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
                          {ok, Data} = file:read_file(Filename),
                          ec_cmd_log:info(LogState, "Publishing app~n~s~n", [rp_app_info:format(1, App)]),
                          %erlcloud_s3:put_object(?BUCKET, Path, [Data], S3),

                          % Create and upload package to datastore
                          PackageJson = rp_app_info:json(App),
                          io:format("~p~n", [PackageJson])
                          %orchestrate_client:kv_put("packages", Path, PackageJson)
                  end, Apps).
