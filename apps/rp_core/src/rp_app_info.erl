%% -*- erlang-indent-level: 4; indent-tabs-mode: nil; fill-column: 80 -*-
-module(rp_app_info).

-export([new/0,
         new/7,
         key/1,
         name/1,
         name/2,
         desc/1,
         desc/2,
         tags/1,
         tags/2,
         repo/1,
         repo/2,
         name_vsn_string/1,
         vsn/1,
         vsn/2,
         vsn_as_string/1,
         dir/1,
         dir/2,
         dl_link/1,
         dl_link/2,
         erts_vsn/1,
         erts_vsn/2,
         is_native/1,
         is_native/2,
         system_arch/1,
         system_arch/2,
         glibc/1,
         glibc/2,
         deps/1,
         deps/2,
         format_error/1,
         json/1,
         format/2,
         format/1]).

-export_type([t/0]).

-record(app_info_t, {name :: atom(),
                     key :: string(),
                     vsn :: string(),
                     desc = <<"">> :: binary(),
                     tags = [] :: [binary()],
                     repo = <<"">> :: binary(),
                     dir :: file:name(),
                     link :: binary(),
                     erts_vsn :: binary(),
                     is_native :: native | generic | source,
                     system_arch :: binary() | undefined,
                     glibc :: binary() | undefined,
                     deps=[]:: [rlx_depsolver:constraint()]}).

%%============================================================================
%% types
%%============================================================================
-opaque t() :: record(app_info_t).

%%============================================================================
%% API
%% ============================================================================
%% @doc Build a new, empty, app info value. This is not of a lot of use and you
%% probably wont be doing this much.
-spec new() -> {ok, t()}.
new() ->
    {ok, #app_info_t{}}.

%% @doc build a complete version of the app info with all fields set.
-spec new(rp_state:t(), atom(), string(), file:name(), [rlx_depsolver:constraint()],
          binary(), generic | native | source) -> {ok, t()} | {fail, any()}.
new(State, AppName, VsnStr, Dir, Deps, Desc, IsNative)
  when erlang:is_atom(AppName) ->
    new_(State, AppName, VsnStr, Dir, Deps, Desc, IsNative).

new_(State, AppName, VsnStr, Dir, Deps, Desc, generic) ->
    BucketName = rp_state:bucket(State),
    ErtsVsn = list_to_binary(erlang:system_info(version)),
    Filename = atom_to_list(AppName)++"-"++VsnStr++".tar.gz",
    Path = filename:join(["generic"
                         ,binary_to_list(ErtsVsn)
                         ,AppName
                         ,VsnStr
                         ,Filename]),
    Link = <<"https://s3.amazonaws.com/", (filename:join(list_to_binary(BucketName), Path))/binary>>,
    {ok, #app_info_t{name=AppName,
                     desc=Desc,
                     key=Path,
                     vsn=VsnStr,
                     dir=Dir,
                     link=Link,
                     erts_vsn=ErtsVsn,
                     is_native=generic,
                     deps=Deps}};
new_(State, AppName, ParsedVsn, Dir, Deps, Desc, source) ->
    BucketName = rp_state:bucket(State),
    VsnStr = ec_semver:format(ParsedVsn),
    Filename = atom_to_list(AppName)++"-"++VsnStr++".tar.gz",
    Path = filename:join(["source"
                         ,AppName
                         ,VsnStr
                         ,Filename]),
    Link = <<"https://s3.amazonaws.com/", (filename:join(list_to_binary(BucketName), Path))/binary>>,
    {ok, #app_info_t{name=AppName,
                     desc=Desc,
                     key=Path,
                     vsn=ParsedVsn,
                     dir=Dir,
                     link=Link,
                     is_native=source,
                     deps=Deps}}.

-spec name(t()) -> atom().
name(#app_info_t{name=Name}) ->
    Name.

-spec name(t(), atom()) -> t().
name(AppInfo=#app_info_t{}, AppName)
  when erlang:is_atom(AppName) ->
    AppInfo#app_info_t{name=AppName}.

-spec desc(t()) -> binary().
desc(#app_info_t{desc=Desc}) ->
    Desc.

-spec desc(t(), binary()) -> t().
desc(AppInfo=#app_info_t{}, Desc) ->
    AppInfo#app_info_t{desc=list_to_binary(Desc)}.

-spec tags(t()) -> [binary()].
tags(#app_info_t{tags=Tags}) ->
    Tags.

-spec tags(t(), [binary()]) -> t().
tags(AppInfo=#app_info_t{}, Tags) ->
    AppInfo#app_info_t{tags=Tags}.

-spec repo(t()) -> binary().
repo(#app_info_t{repo=Repo}) ->
    Repo.

-spec repo(t(), binary()) -> t().
repo(AppInfo=#app_info_t{}, Repo) ->
    AppInfo#app_info_t{repo=Repo}.

name_vsn_string(AppInfo) ->
    AppName = atom_to_list(name(AppInfo)),
    AppVsn = vsn(AppInfo),
    AppName++"-"++AppVsn.

-spec key(t()) -> string().
key(#app_info_t{key=Key}) ->
    Key.

-spec vsn(t()) -> ec_semver:semver().
vsn(#app_info_t{vsn=Vsn}) ->
    Vsn.

-spec vsn_as_string(t()) -> string().
vsn_as_string(#app_info_t{vsn=Vsn}) ->
    erlang:binary_to_list(erlang:iolist_to_binary(ec_semver:format(Vsn))).

-spec vsn_as_binary(t()) -> binary().
vsn_as_binary(#app_info_t{vsn=Vsn}) ->
    erlang:iolist_to_binary(ec_semver:format(Vsn)).

-spec vsn(t(), string()) -> {ok, t()} | {fail, any()}.
vsn(AppInfo=#app_info_t{}, AppVsn)
  when erlang:is_list(AppVsn) ->
    case parse_version(AppVsn) of
        {fail, Reason} ->
            io:format("vsn_parse fail reason=~p", [Reason]);
        ParsedVsn ->
            {ok, AppInfo#app_info_t{vsn=ParsedVsn}}
    end.

-spec dir(t()) -> file:name().
dir(#app_info_t{dir=Dir}) ->
    Dir.
-spec dir(t(), file:name()) -> t().
dir(AppInfo=#app_info_t{}, Dir) ->
    AppInfo#app_info_t{dir=Dir}.

dl_link(#app_info_t{link=Link}) ->
    Link.

dl_link(AppInfo=#app_info_t{}, Link) ->
    AppInfo#app_info_t{link=Link}.

erts_vsn(#app_info_t{erts_vsn=ErtsVsn}) ->
    ErtsVsn.

erts_vsn(AppInfo=#app_info_t{}, ErtsVsn) ->
    AppInfo#app_info_t{erts_vsn=ErtsVsn}.

is_native(#app_info_t{is_native=IsNative}) ->
    IsNative.

is_native(AppInfo=#app_info_t{}, IsNative) ->
    AppInfo#app_info_t{is_native=IsNative}.

system_arch(#app_info_t{system_arch=SystemArch}) ->
    SystemArch.

system_arch(AppInfo=#app_info_t{}, SystemArch) ->
    AppInfo#app_info_t{system_arch=SystemArch}.

glibc(#app_info_t{glibc=Glibc}) ->
    Glibc.

glibc(AppInfo=#app_info_t{}, Glibc) ->
    AppInfo#app_info_t{glibc=Glibc}.

-spec deps(t()) -> [rlx_depsolver:constraint()].
deps(#app_info_t{deps=Deps}) ->
    Deps.
-spec deps(t(), [rlx_depsolver:constraint()]) -> t().
deps(AppInfo=#app_info_t{}, Deps)
  when erlang:is_list(Deps) ->
    AppInfo#app_info_t{deps=Deps}.

-spec format_error(Reason::term()) -> iolist().
format_error({vsn_parse, AppName}) ->
    io_lib:format("Error parsing version for ~p",
                  [AppName]).

-spec json(t()) -> binary().
json(AppInfo=#app_info_t{desc=Desc, repo=Repo, is_native=Native, tags=Tags}) ->
    Deps = [dep_json(Dep) || Dep <- deps(AppInfo)],
    jsx:encode([{name, name(AppInfo)}
               ,{vsn, list_to_binary(vsn(AppInfo))}
               ,{desc, Desc}
               ,{tags, Tags}
               ,{repo, Repo}
               ,{link, dl_link(AppInfo)}
               ,{deps, Deps} |
               case Native of
                   source ->
                       [{arch, <<"source">>}];
                   generic ->
                       [{arch, <<"generic">>}
                       ,{erts, erts_vsn(AppInfo)}];
                   native ->
                       [{system_arch, system_arch(AppInfo)}
                       ,{erts, erts_vsn(AppInfo)}
                       ,{glibc, glibc(AppInfo)}]
               end]).

dep_json({Name, Version}) ->
    {atom_to_binary(Name, utf8), ec_cnv:to_binary(Version)}.

-spec format(t()) -> iolist().
format(AppInfo) ->
    format(0, AppInfo).

-spec format(non_neg_integer(), t()) -> iolist().
format(Indent, #app_info_t{name=Name, vsn=Vsn, dir=Dir, deps=Deps}) ->
    [rp_util:indent(Indent), erlang:atom_to_list(Name), "-", ec_semver:format(Vsn),
     ": ", Dir, "\n",
     rp_util:indent(Indent + 1), "Dependencies:\n",
     [[rp_util:indent(Indent + 2), rlx_depsolver:format_constraint(Dep), ",\n"] || Dep <- Deps]].

%%%===================================================================
%%% Internal Functions
%%%===================================================================
parse_version(Vsn)
  when erlang:is_list(Vsn) ->
    ec_semver:parse(Vsn);
parse_version(Vsn = {_, {_, _}}) ->
    Vsn.
