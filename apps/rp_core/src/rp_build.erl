-module(rp_build).

-export([run/0]).

run() ->
    rp_utils:sh("find `pwd` -name rebar.config | grep -v erlware | xargs -I {} sed -i 's/warnings_as_errors,/ /' {}", []),
    rp_utils:sh("find `pwd` -name rebar.config | grep -v erlware | xargs -I {} sed -i 's/warnings_as_errors/ /' {}", []),
    try
        rp_utils:sh("rebar get-deps compile", []),
        ok
    catch
        _:_ ->
            {error, erlang:get_stacktrace()}
    end.
