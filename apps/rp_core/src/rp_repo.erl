-module(rp_repo).

-export([handle_repo/4]).

handle_repo(State, Desc, AppTags, Repo) ->
    %% Setup directories for building
    {ok, Cwd} = file:get_cwd(),
    TmpDir = ec_file:insecure_mkdtemp(),
    ok = file:set_cwd(TmpDir),

    %% Fetch
    rp_utils:sh("git clone " ++ Repo, []),
    {ok, RepoDir} = rp_utils:sh("ls", []),
    ok = file:set_cwd(filename:absname(string:strip(RepoDir, both, $\n))),

    Result = case string:tokens(os:cmd("git tag | sort -V -r"), "\n") of
                 [] ->
                     io:format("Repo ~s has no tags~n", [Repo]),
                     {no_tags, Repo};
                 Tags ->
                     lists:map(fun(Tag) ->
                                       os:cmd("git checkout -q " ++ Tag),
                                       os:cmd("git reset --hard HEAD"),
                                       os:cmd("git clean -xdf"),
                                       case filelib:is_dir("c_src") of
                                           true ->
                                               skip;
                                           false ->
                                               try
                                                   {Repo, handle_apps(State, Desc, AppTags)}
                                               catch
                                                   C:T ->
                                                       {Repo, skip, {C, T}}
                                               end
                                       end
                               end, lists:sublist(Tags, 3))
             end,
    ok = file:set_cwd(Cwd),
    Result.

handle_apps(State, Desc, AppTags) ->
    Bucket = rp_state:bucket(State),
    Collection = rp_state:collection(State),
    S3Creds = rp_state:s3(State),

    %% Build
    case rp_build:run() of
        ok ->
            case filelib:wildcard("**/c_src") of
                [] ->
                    %% Collect apps to publish
                    Deps = rp_app_discovery:get_apps(State, [<<"deps">>]),
                    case rp_app_discovery:get_apps(State, [<<".">>]) of
                        [App] ->
                            App1 = rp_app_info:desc(App, Desc),
                            App2 = rp_app_info:tags(App1, AppTags),
                            Deps1 = [{rp_app_info:name(A), rp_app_info:vsn(A)} || A <- Deps],

                            %% Build tarballs and upload to s3
                            App3 = rp_app_info:deps(App2, Deps1),
                            rp_upload:upload_app(App3, Collection, S3Creds, Bucket),
                            Deps1;
                        [] ->
                            no_app_found
                    end;
                _ ->
                    c_src
            end;
        {error, Error} ->
            {build_fail, Error}
    end.
