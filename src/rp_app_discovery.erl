%% -*- erlang-indent-level: 4; indent-tabs-mode: nil; fill-column: 80 -*-
-module(rp_app_discovery).

-export([get_apps/2
        ,format_detail/1]).

-spec get_apps(rp_state:t(), list(binary())) -> {ok, list(rp_app_info:t())}.
get_apps(State, LibDirs) ->
    lists:foldl(fun(AppFile, Acc) ->
                        case is_valid_otp_app(State, AppFile) of
                            {ok, App} ->
                                [App | Acc];
                            {warning, W} ->
                                lager:error(format_detail(W)),
                                Acc;
                            {error, E} ->
                                lager:error(format_detail(E)),
                                Acc;
                            _ ->
                                Acc
                        end
                end, [], app_files(LibDirs)).

-spec app_files(list(binary())) -> list(binary()).
app_files(LibDirs) ->
    lists:foldl(fun(LibDir, Acc) ->
                        Files = app_files_paths(LibDir),
                        BinFiles = lists:map(fun(F) ->
                                                     list_to_binary(F)
                                             end, Files),
                        Acc ++ BinFiles
                end, [], LibDirs).

-spec app_files_paths(binary()) -> list(string()).
app_files_paths(LibDir) ->
    %% Search for Erlang apps in the lib dir itself
    Path1 = filename:join([binary_to_list(LibDir),
                           "ebin",
                           "*.app"]),
    %% Search for Erlang apps in subdirs of lib dir
    Path2 = filename:join([binary_to_list(LibDir),
                           "*",
                           "ebin",
                           "*.app"]),
    lists:foldl(fun(Path, Acc) ->
                        Files = filelib:wildcard(Path),
                        Files ++ Acc
                end, [], [Path1, Path2]).

-spec format_detail(ErrorDetail::term()) -> iolist().
format_detail({missing_beam_file, Module, BeamFile}) ->
    io_lib:format("Missing beam file ~p ~p", [Module, BeamFile]);
format_detail({accessing, File, eaccess}) ->
    io_lib:format("permission denied accessing file ~s", [File]);
format_detail({accessing, File, Type}) ->
    io_lib:format("error (~p) accessing file ~s", [Type, File]);
format_detail({no_beam_files, EbinDir}) ->
    io_lib:format("no beam files found in directory ~s", [EbinDir]);
format_detail({not_a_directory, EbinDir}) ->
    io_lib:format("~s is not a directory when it should be a directory", [EbinDir]);
format_detail({unable_to_load_app, AppDir, _}) ->
    io_lib:format("Unable to load the application metadata from ~s", [AppDir]);
format_detail({invalid_app_file, File}) ->
    io_lib:format("Application metadata file exists but is malformed: ~s",
                  [File]);
format_detail({unversioned_app, AppDir, _AppName}) ->
    io_lib:format("Application metadata exists but version is not available: ~s",
                  [AppDir]);
format_detail({app_info_error, {Module, Detail}}) ->
    Module:format_error(Detail).

-spec is_valid_otp_app(rp_state:t(), file:name()) -> {ok, rp_app_info:t()} |
                                                     {warning, Reason::term()} |
                                                     {error, Reason::term()} |
                                                     {noresult, false}.
is_valid_otp_app(State, File) ->
    %% Is this an ebin dir?
    EbinDir = filename:dirname(File),
    case filename:basename(EbinDir) of
        <<"ebin">> ->
            case filename:extension(File) of
                <<".app">> ->
                    gather_application_info(State, EbinDir, File);
                _ ->
                    {noresult, false}
            end;
        _ ->
            {noresult, false}
    end.


-spec gather_application_info(rp_state:t(), file:name(), file:filename()) ->
                                     {ok, rp_app_info:t()} |
                                     {warning, Reason::term()} |
                                     {error, Reason::term()}.
gather_application_info(State, EbinDir, File) ->
    AppDir = filename:dirname(EbinDir),
    case file:consult(File) of
        {ok, [{application, AppName, AppDetail}]} ->
            validate_application_info(State, EbinDir, File, AppName, AppDetail);
        {error, Reason} ->
            {warning, {unable_to_load_app, AppDir, Reason}};
        _ ->
            {warning, {invalid_app_file, File}}
    end.

-spec validate_application_info(rp_state:t(),
                                file:name(),
                                file:name(),
                                atom(),
                                proplists:proplist()) ->
                                       {ok, list()} |
                                       {warning, Reason::term()} |
                                       {error, Reason::term()}.
validate_application_info(State, EbinDir, AppFile, AppName, AppDetail) ->
    AppDir = filename:dirname(EbinDir),
    case get_modules_list(AppFile, AppDetail) of
        {ok, List} ->
            case has_all_beams(EbinDir, List) of
                ok ->
                    get_vsn(State, AppDir, AppName, AppDetail);
                Error1 ->
                    Error1
            end;
        Error -> Error
    end.

-spec get_modules_list(file:name(), proplists:proplist()) ->
                              {ok, list()} |
                              {warning, Reason::term()} |
                              {error, Reason::term()}.
get_modules_list(AppFile, AppDetail) ->
    case proplists:get_value(modules, AppDetail) of
        undefined ->
            {warning, {invalid_app_file, AppFile}};
        ModulesList ->
            {ok, ModulesList}
    end.

-spec has_all_beams(file:name(), list()) ->
                           ok | {error, Reason::term()}.
has_all_beams(EbinDir, [Module | ModuleList]) ->
    BeamFile = filename:join([EbinDir,
                              list_to_binary(atom_to_list(Module) ++ ".beam")]),
    case ec_file:exists(BeamFile) of
        true ->
            has_all_beams(EbinDir, ModuleList);
        false ->
            {warning, {missing_beam_file, Module, BeamFile}}
    end;
has_all_beams(_, []) ->
    ok.

-spec get_vsn(rp_state:t(), file:name(), atom(), proplists:proplist()) ->
                     {ok, rp_app_info:t()} | {error, Reason::term()}.
get_vsn(State, AppDir, AppName, AppDetail) ->
    case proplists:get_value(vsn, AppDetail) of
        undefined ->
            {error, {unversioned_app, AppDir, AppName}};
        AppVsn ->
            case get_deps(State, AppDir, AppName, AppVsn, AppDetail) of
                {ok, App} ->
                    {ok, App};
                {error, Detail} ->
                    {error, {app_info_error, Detail}}
            end
    end.

-spec get_deps(rp_state:t(), file:name(), atom(), string(), proplists:proplist()) ->
                      {ok, rp_app_info:t()} | {error, Reason::term()}.
get_deps(State, AppDir, AppName, AppVsn, AppDetail) ->
    Apps = lists:delete(kernel, lists:delete(stdlib, proplists:get_value(applications, AppDetail, []))),
    IncludedApps = proplists:get_value(included_applications, AppDetail, []),

    Constraints = case file:consult(filename:join(AppDir, "rebar.config")) of
                      {error, enoent} ->
                          Apps++IncludedApps;
                      {ok, Terms} ->
                          Deps = proplists:get_value(deps, Terms, []),
                          constraints(Deps, Apps++IncludedApps)
                  end,

    rp_app_info:new(State, AppName, AppVsn, AppDir, Constraints, has_native_code(AppDir)).

constraints(Deps, ListedApps) ->
    Constraints = lists:map(fun({Name, "", _}) ->
                      Name;
                 ({Name, ".*", _}) ->
                      Name;
                 ({Name, Vsn, _}) ->
                      {Name, Vsn}
              end, Deps),

    lists:umerge(fun(_Name, _Name) ->
                         true;
                    ({_Name, _}, _Name) ->
                         true;
                    (_, _) ->
                         false
                 end, Constraints, ListedApps).


has_native_code(Dir) ->
    filelib:is_dir(filename:join(Dir, "c_src")).

%%%===================================================================
%%% Test Functions
%%%===================================================================

-ifndef(NOTEST).
-include_lib("eunit/include/eunit.hrl").

-endif.
