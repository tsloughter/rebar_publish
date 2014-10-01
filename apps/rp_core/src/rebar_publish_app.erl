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
    init_state(),
    rebar_publish_sup:start_link().

%%--------------------------------------------------------------------
stop(_State) ->
    ok.

%%%===================================================================
%%% Internal functions
%%%===================================================================

init_state() ->
    {ok, ApiKey} = application:get_env(rp_core, orchestrate_api_key),
    {ok, Collection} = application:get_env(rp_core, orchestrate_collection),
    {ok, AccessId} = application:get_env(rp_core, s3_access_id),
    {ok, SecretKey} = application:get_env(rp_core, s3_secret_key),
    {ok, Bucket} = application:get_env(rp_core, s3_bucket),
    {ok, Images} = application:get_env(rp_core, images),

    orchestrate_client:set_apikey(ApiKey),
    S3 = erlcloud_s3:new(AccessId, SecretKey),

    application:set_env(rp_core, s3_creds, S3),
    application:set_env(rp_core, collection, Collection),
    application:set_env(rp_core, bucket, Bucket),
    application:set_env(rp_core, images, Images),

    rp_state:new(Bucket, S3, Collection, Images).
