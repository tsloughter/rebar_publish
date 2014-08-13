-module(rp).

-export([publish/1
        ,update/0]).

publish(Repo) ->
    rebar_publish_server:publish(Repo).

update() ->
    rebar_publish_server:update().
