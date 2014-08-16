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

start_link(S3, Images) ->
    supervisor:start_link({local, ?SERVER}, ?MODULE, [S3, Images]).

%%%===================================================================
%%% Supervisor callbacks
%%%===================================================================

init([S3, Images]) ->
    RestartStrategy = one_for_one,
    MaxRestarts = 1000,
    MaxSecondsBetweenRestarts = 3600,

    SupFlags = {RestartStrategy, MaxRestarts, MaxSecondsBetweenRestarts},

    {ok, {SupFlags, [{rebar_publish_server
                     ,{rebar_publish_server, start_link, [S3, Images]}
                     ,permanent, brutal_kill, worker, [rebar_publish_server]}]}}.

%%%===================================================================
%%% Internal functions
%%%===================================================================
