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

    orchestrate_client:set_apikey(ApiKey),
    S3 = erlcloud_s3:new(AccessId, SecretKey),

    application:set_env(rp_core, s3_creds, S3),
    application:set_env(rp_core, collection, Collection),
    application:set_env(rp_core, bucket, Bucket),

    rp_state:new(Bucket, S3, Collection),

    ets:new(packages, [named_table, public]),
    Results = get_all_packages(),
    Return = jsx:encode(dict:to_list(Results)),
    ets:insert(packages, {pkgs, Return}).

get_all_packages() ->
    get_all_packages(0, dict:new()).

get_all_packages(Offset, Acc) ->
    case orchestrate_client:search("packages", "name:*", Offset, 100) of
        {200, _Headers, [{<<"count">>, Count}
                        ,{<<"total_count">>, _Total}
                        ,{<<"results">>, Results} | _]} when Count < 100 ->
            merge(Results, Acc);
        {200, _Headers, [{<<"count">>, Count}
                        ,{<<"total_count">>, _Total}
                        ,{<<"results">>, Results} | _]} ->
            get_all_packages(Offset+Count, merge(Results, Acc))
    end.

to_app(Res) ->
    {<<"value">>, Value} = lists:keyfind(<<"value">>, 1, Res),
    Value.

merge([], Dict) ->
    Dict;
merge([H | T], Dict) ->
    App = to_app(H),
    {<<"name">>, Name} = lists:keyfind(<<"name">>, 1, App),
    ets:insert(packages, {Name, App}),
    merge(T, dict:store(Name, App, Dict)).
