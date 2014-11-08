-module(rp).

-export([publish/1
        ,update/3]).

publish(Repo) ->
    rebar_publish:handle_repo(Repo).

update(Arch, ErtsVsn, GlibcVsn) ->
    rebar_publish:update(Arch, ErtsVsn, GlibcVsn).
