%%%-------------------------------------------------------------------
%%% @author Tristan Sloughter <t@crashfast.com>
%%% @copyright (C) 2014, Tristan Sloughter
%%% @doc
%%%
%%% @end
%%% Created : 11 Aug 2014 by Tristan Sloughter <t@crashfast.com>
%%%-------------------------------------------------------------------
-module(rebar_publish_app).

-behaviour(application).

%% Application callbacks
-export([start/2
        ,stop/1]).

%%%===================================================================
%%% Application callbacks
%%%===================================================================

start(_StartType, _StartArgs) ->
    rebar_publish_sup:start_link().

%%--------------------------------------------------------------------
stop(_State) ->
    ok.

%%%===================================================================
%%% Internal functions
%%%===================================================================
