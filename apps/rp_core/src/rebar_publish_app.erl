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
    rebar_publish_sup:start_link(state()).

%%--------------------------------------------------------------------
stop(_State) ->
    ok.

%%%===================================================================
%%% Internal functions
%%%===================================================================

state() ->
    SystemArch = list_to_binary(erlang:system_info(system_architecture)),
    ErtsVsn = list_to_binary(erlang:system_info(version)),
    {glibc, GlibcVsn, _, _} = erlang:system_info(allocator),
    GlibcVsnStr = list_to_binary(io_lib:format("~p.~p", GlibcVsn)),

    {ok, ApiKey} = application:get_env(rp_core, orchestrate_api_key),
    {ok, Collection} = application:get_env(rp_core, orchestrate_collection),
    {ok, AccessId} = application:get_env(rp_core, s3_access_id),
    {ok, SecretKey} = application:get_env(rp_core, s3_secret_key),
    {ok, Bucket} = application:get_env(rp_core, s3_bucket),
    {ok, Images} = application:get_env(rp_core, images),

    orchestrate_client:set_apikey(ApiKey),
    S3 = erlcloud_s3:new(AccessId, SecretKey),

    rp_state:new(ErtsVsn, SystemArch, GlibcVsnStr, S3, Images, Collection, Bucket).
