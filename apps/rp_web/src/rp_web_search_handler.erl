%%%-------------------------------------------------------------------
%%% @author Tristan Sloughter <t@crashfast.com>
%%% @copyright (C) 2014, Tristan Sloughter
%%% @doc
%%%
%%% @end
%%% Created : 20 Aug 2014 by Tristan Sloughter <t@crashfast.com>
%%%-------------------------------------------------------------------
-module(rp_web_search_handler).

-export([init/3,
         allowed_methods/2,
         content_types_provided/2,
         get_json/2,
         terminate/3]).

init(_Transport, _Req, _Opts) ->
    {upgrade, protocol, cowboy_rest}.

allowed_methods(Req, State) ->
    {[<<"HEAD">>, <<"GET">>], Req, State}.

content_types_provided(Req, State) ->
    {[{{<<"application">>, <<"json">>, []}, get_json}], Req, State}.

get_json(Req, State) ->
    {Query, Req1} = cowboy_req:qs_val(<<"query">>, Req),

    {200, _Headers, [{<<"count">>, _Count}
                     ,{<<"total_count">>, _Total}
                     ,{<<"results">>, Results} | _]} = orchestrate_client:search("packages", Query, 0, 100),
    {jsx:encode(Results), Req1, State}.

terminate(_Reason, _Req, _State) ->
    ok.
