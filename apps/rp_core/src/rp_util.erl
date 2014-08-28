%% -*- erlang-indent-level: 4; indent-tabs-mode: nil; fill-column: 80 -*-
-module(rp_util).

-export([indent/1]).

-define(ONE_LEVEL_INDENT, "     ").

%% @doc ident to the level specified
-spec indent(non_neg_integer()) -> iolist().
indent(Amount) when erlang:is_integer(Amount) ->
    [?ONE_LEVEL_INDENT || _ <- lists:seq(1, Amount)].
