%%%-------------------------------------------------------------------
%%% @author Tristan Sloughter <t@crashfast.com>
%%% @copyright (C) 2014, Tristan Sloughter
%%% @doc
%%%
%%% @end
%%% Created : 11 Aug 2014 by Tristan Sloughter <t@crashfast.com>
%%%-------------------------------------------------------------------
-module(rebar_publish_sup).

-behaviour(supervisor).

%% API
-export([start_link/2]).

%% Supervisor callbacks
-export([init/1]).

-define(SERVER, ?MODULE).

%%%===================================================================
%%% API functions
%%%===================================================================

start_link(LogState, S3) ->
    supervisor:start_link({local, ?SERVER}, ?MODULE, [LogState, S3]).

%%%===================================================================
%%% Supervisor callbacks
%%%===================================================================

init([LogState, S3]) ->
    RestartStrategy = one_for_one,
    MaxRestarts = 1000,
    MaxSecondsBetweenRestarts = 3600,

    SupFlags = {RestartStrategy, MaxRestarts, MaxSecondsBetweenRestarts},

    {ok, {SupFlags, [{rebar_publish_server
                     ,{rebar_publish_server, start_link, [LogState, S3]}
                     ,permanent, brutal_kill, worker, [rebar_publish_server]}]}}.

%%%===================================================================
%%% Internal functions
%%%===================================================================
