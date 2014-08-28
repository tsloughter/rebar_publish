%%%-------------------------------------------------------------------
%%% @author Tristan Sloughter <t@crashfast.com>
%%% @copyright (C) 2014, Tristan Sloughter
%%% @doc
%%%
%%% @end
%%% Created : 20 Aug 2014 by Tristan Sloughter <t@crashfast.com>
%%%-------------------------------------------------------------------
-module(rp_web_handler).

-export([init/3,
         allowed_methods/2,
         content_types_provided/2,
         get_erlang/2,
         terminate/3]).

init(_Transport, _Req, _Opts) ->
    {upgrade, protocol, cowboy_rest}.

allowed_methods(Req, State) ->
    {[<<"HEAD">>, <<"GET">>], Req, State}.

content_types_provided(Req, State) ->
    {[{{<<"application">>, <<"erlang">>, []}, get_erlang}], Req, State}.

get_erlang(Req, State) ->
    {Arch, Req1} = cowboy_req:qs_val(<<"arch">>, Req),
    {ErtsVsn, Req2} = cowboy_req:qs_val(<<"erts">>, Req1),
    {GlibcVsn, Req3} = cowboy_req:qs_val(<<"glibc">>, Req2),
    {ok, Packages} = rp:update(Arch, ErtsVsn, GlibcVsn),
    Binary = term_to_binary(Packages),
    {Binary, Req3, State}.

terminate(_Reason, _Req, _State) ->
    ok.
