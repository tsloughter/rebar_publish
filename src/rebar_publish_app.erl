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
    {ok, ApiKey} = application:get_env(rebar_publish, orchestrate_api_key),
    {ok, AccessId} = application:get_env(rebar_publish, s3_access_id),
    {ok, SecretKey} = application:get_env(rebar_publish, s3_secret_key),

    LogState = ec_cmd_log:new(debug, command_line),
    orchestrate_client:set_apikey(ApiKey),
    S3 = erlcloud_s3:new(AccessId, SecretKey),

    rebar_publish_sup:start_link(LogState, S3).

%%--------------------------------------------------------------------
stop(_State) ->
    ok.

%%%===================================================================
%%% Internal functions
%%%===================================================================
