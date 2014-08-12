-module(rebar_publish).

-export([do/1]).

-define(BUCKET, "rebar_packages").
-define(ACCESS_ID, "AKIAJBRG776SKWHJOAKQ").
-define(SECRET_KEY, "").

do(Repo) ->
    LogState = ec_cmd_log:new(debug, command_line),
    orchestrate_client:set_apikey(<<"">>),

    S3 = erlcloud_s3:new(?ACCESS_ID, ?SECRET_KEY),
    SystemArch = erlang:system_info(system_architecture),
    ErtsVsn = erlang:system_info(version),
    {glibc, GlibcVsn, _, _} = erlang:system_info(allocator),
    GlibcVsnStr = io_lib:format("~p.~p", GlibcVsn),
    Arch = filename:join(SystemArch, GlibcVsnStr),

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
    RelxState = rlx_state:new("relx.config", []),
    Apps = [X || {ok, X} <- rlx_app_discovery:get_app_metadata(RelxState, [<<"deps">>
                                                                          ,<<"..">>])],

    % Build tarballs and upload to s3
    lists:foreach(fun(App) ->
                          AppName = atom_to_list(rlx_app_info:name(App)),
                          AppVsn = rlx_app_info:original_vsn(App),
                          AppDir = binary_to_list(rlx_app_info:dir(App)),
                          Filename = AppName++".tar.gz",

                          % Create Archive, pruning out deps dir and .git
                          Files = [{filename:join(AppName++"-"++AppVsn, X), X}
                                  || X <- filelib:wildcard("**", AppDir)
                                         ,hd(filename:split(X)) =/= "deps"
                                         ,hd(filename:split(X)) =/= ".git"],
                          erl_tar:create(Filename
                                        ,Files
                                        ,[compressed]),

                          % Check if app includes native code and change key
                          Path = case has_native_code(Dir) of
                                     true ->
                                         filename:join([Arch
                                                       ,ErtsVsn
                                                       ,AppName
                                                       ,AppVsn
                                                       ,Filename]);
                                     false ->
                                         filename:join(["generic"
                                                       ,ErtsVsn
                                                       ,AppName
                                                       ,AppVsn
                                                       ,Filename])
                                 end,

                          % Upload arhive
                          {ok, Data} = file:read_file(Filename),
                          ec_cmd_log:info(LogState, "Publishing app ~p version ~p...~n", [AppName, AppVsn]),
                          erlcloud_s3:put_object(?BUCKET, Path, [Data], S3),

                          % Create and upload package to datastore
                          PackageJson =
                              jsx:encode([{name, rlx_app_info:name(App)}
                                         ,{vsn, list_to_binary(rlx_app_info:original_vsn(App))}
                                         ,{link, <<"https://s3.amazonaws.com/", (filename:join(<<"rebar_packages">>, Path))/binary>>}]),

                          orchestrate_client:kv_put("packages", Path, PackageJson)
                  end, Apps).

has_native_code(Dir) ->
    filelib:is_dir(filename:join(Dir, "c_src")).
