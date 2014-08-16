-module(rp_docker).

-export([run_build/1]).

-spec run_build(file:name()) -> ok.
run_build(Dir) ->
    {ok, Id} = docker_container:create([{'Image', <<"tsloughter/erlang:17.1">>}]),
    ok = docker_container:start(Id, [{'Binds', [<<Dir/binary, ":/opt/src">>]}]).
