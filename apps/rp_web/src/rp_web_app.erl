%%%-------------------------------------------------------------------
%%% @author Tristan Sloughter <t@crashfast.com>
%%% @copyright (C) 2014, Tristan Sloughter
%%% @doc
%%%
%%% @end
%%% Created : 20 Aug 2014 by Tristan Sloughter <t@crashfast.com>
%%%-------------------------------------------------------------------
-module(rp_web_app).

-behaviour(application).

%% Application callbacks
-export([start/2
        ,stop/1]).

%%%===================================================================
%%% Application callbacks
%%%===================================================================

start(_StartType, _StartArgs) ->
    start_cowboy(),
    rp_web_sup:start_link().

%%--------------------------------------------------------------------
stop(_State) ->
    ok.

%%%===================================================================
%%% Internal functions
%%%===================================================================

start_cowboy() ->
    {ok, ListenPort} = application:get_env(rp_web, http_port),

    Dispatch = cowboy_router:compile([
                                     %% {HostMatch, list({PathMatch, Handler, Opts})}
                                     {'_', [{'_', rp_web_handler, []}]}
                                     ]),

    cowboy:start_http(rp_listener, 100,
                     [{port, ListenPort}], [{env, [{dispatch, Dispatch}]}]).
