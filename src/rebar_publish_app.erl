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

-define(ACCESS_ID, "AKIAJBRG776SKWHJOAKQ").
-define(SECRET_KEY, "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").
-define(API_KEY, <<"55d0232a-bb03-4785-996f-3d0f4070a347">>).

%%%===================================================================
%%% Application callbacks
%%%===================================================================

start(_StartType, _StartArgs) ->
    LogState = ec_cmd_log:new(debug, command_line),
    orchestrate_client:set_apikey(?API_KEY),
    S3 = erlcloud_s3:new(?ACCESS_ID, ?SECRET_KEY),

    rebar_publish_sup:start_link(LogState, S3).

%%--------------------------------------------------------------------
stop(_State) ->
    ok.

%%%===================================================================
%%% Internal functions
%%%===================================================================
