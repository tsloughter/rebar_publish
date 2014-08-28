-module(rp).

-export([publish/1
        ,update/3]).

publish(Repo) ->
    rebar_publish_server:publish(Repo).

update(Arch, ErtsVsn, GlibcVsn) ->
    rebar_publish_server:update(Arch, ErtsVsn, GlibcVsn).
