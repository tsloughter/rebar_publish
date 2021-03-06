-module(rp_docker).

-export([run_build/2]).

-spec run_build(file:name(), binary() | {binary(), binary(), binary()} | {binary(), binary()} ) -> ok.
run_build(Dir, Image) ->
    {ok, Id} = docker_container:create([{'Image', image(Image)}]),
    ok = docker_container:start(Id, [{'Binds', [<<(list_to_binary(Dir))/binary, ":/opt/src">>]}]),
    {ok, _Status} = docker_container:wait(Id),
    ok.

image(Image) when is_binary(Image) ->
    Image;
image({ImageId, Tag}) ->
    <<ImageId/binary, ":", Tag/binary>>;
image({Repo, ImageId, Tag}) ->
    <<Repo/binary, "/", ImageId/binary, ":", Tag/binary>>.
