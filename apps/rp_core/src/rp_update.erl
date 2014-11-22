-module(rp_update).

-export([do/1
        ,solve/2
        ,subgraph/2]).

do(ErtsVsn) ->
    Query = io_lib:format("erts: [0 TO ~s]", [ErtsVsn]),


    {200, _Headers, [{<<"count">>, _Count}
                    ,{<<"total_count">>, _Total}
                    ,{<<"results">>, Results} | _]} = orchestrate_client:search("packages", Query, 0, 100),
    Graph = new(),
    Dict = lists:foldl(fun(X, PackageDict) ->
                               App = proplists:get_value(<<"value">>, X, []),
                               Name = proplists:get_value(<<"name">>, App, ""),
                               Vsn = proplists:get_value(<<"vsn">>, App, ""),
                               Deps = proplists:get_value(<<"deps">>, App, []),
                               add(Graph, {Name, Vsn, Deps}),
                               dict:store({Name, Vsn}, App, PackageDict)
                       end, dict:new(), Results),
    {Dict, store_graph(Graph)}.

store_graph(G) ->
    Vs = lists:map(
           fun(V) ->
                   digraph:vertex(G, V)
           end, digraph:vertices(G)),
    Es = lists:flatmap(
           fun({V, _}) ->
                   lists:map(
                     fun(E) ->
                             {_, V1, V2, _} = digraph:edge(G, E),
                             {V1, V2}
                     end, digraph:out_edges(G, V))
           end, Vs),

    {Vs, Es}.

new() ->
    digraph:new().

add(Graph, {PkgName, PkgVsn, Deps}) ->
    case digraph:vertex(Graph, {PkgName, PkgVsn}) of
        false ->
            V = digraph:add_vertex(Graph, {PkgName, PkgVsn});
        {V, []} ->
            V
    end,

    lists:foreach(fun({DepName, DepVsn}) ->
                          V3 = case digraph:vertex(Graph, {DepName, DepVsn}) of
                                   false ->
                                       digraph:add_vertex(Graph, {DepName, DepVsn});
                                   {V2, []} ->
                                       V2
                               end,
                          digraph:add_edge(Graph, V, V3)
                  end, Deps).

solve(Graph, Vertices) ->
    solve(Graph, Vertices, dict:new()).

solve(_Graph, [], Solution) ->
    {_, Vertices} = lists:unzip(dict:to_list(Solution)),
    Vertices;
solve(Graph, Vertices, Solution) ->
    {NV, NS} =
        lists:foldl(fun(V, {NewVertices, SolutionAcc}) ->
                        OutNeighbors = digraph:out_neighbours(Graph, V),
                        lists:foldl(fun({Key, _}=N, {NewVertices1, SolutionAcc1}) ->
                                            case dict:is_key(Key, SolutionAcc1) orelse
                                                lists:keymember(Key, 1, Vertices) of
                                                true ->
                                                    {NewVertices1, SolutionAcc1};
                                                false ->
                                                    {[N | NewVertices1], dict:store(Key, N, SolutionAcc1)}
                                            end
                                    end, {NewVertices, SolutionAcc}, OutNeighbors)
                    end, {[], Solution}, Vertices),
    solve(Graph, NV, NS).

subgraph(Graph, Vertices) ->
    digraph_utils:subgraph(Graph, Vertices).
