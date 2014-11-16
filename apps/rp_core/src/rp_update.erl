-module(rp_update).

-export([do/1]).

do(ErtsVsn) ->
    Query = io_lib:format("erts: [0 TO ~s]", [ErtsVsn]),


    {200, _Headers, [{<<"count">>, _Count}
                    ,{<<"total_count">>, _Total}
                    ,{<<"results">>, Results} | _]} = orchestrate_client:search("packages", Query, 0, 100),

    lists:foldl(fun(X, {PackageDict, GraphAcc}) ->
                        App = proplists:get_value(<<"value">>, X, []),
                        Name = proplists:get_value(<<"name">>, App, ""),
                        Vsn = proplists:get_value(<<"vsn">>, App, ""),
                        Deps = proplists:get_value(<<"deps">>, App, []),
                        {dict:store({Name, Vsn}, App, PackageDict)
                        ,rlx_depsolver:add_package(GraphAcc, Name, [{Vsn, Deps}])}
                end, {dict:new(), rlx_depsolver:new_graph()}, Results).
