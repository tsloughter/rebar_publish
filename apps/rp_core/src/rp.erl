-module(rp).

-export([publish/1
        ,update/3]).

publish(Repo) ->
    rebar_publish:publish(Repo).

update(Arch, ErtsVsn, GlibcVsn) ->
    rebar_publish:update(Arch, ErtsVsn, GlibcVsn).
