%%%-------------------------------------------------------------------
%%% @author Tristan Sloughter <t@crashfast.com>
%%% @copyright (C) 2014, Tristan Sloughter
%%% @doc
%%%
%%% @end
%%% Created : 15 Nov 2014 by Tristan Sloughter <t@crashfast.com>
%%%-------------------------------------------------------------------
-module(rp_web_package_handler).

-export([init/3,
         allowed_methods/2,
         content_types_provided/2,
         get_json/2,
         get_erlang/2,
         terminate/3]).

init(_Transport, _Req, _Opts) ->
    {upgrade, protocol, cowboy_rest}.

allowed_methods(Req, State) ->
    {[<<"HEAD">>, <<"GET">>], Req, State}.

content_types_provided(Req, State) ->
    {[{{<<"application">>, <<"json">>, []}, get_json}
     ,{{<<"application">>, <<"erlang">>, []}, get_erlang}], Req, State}.

get_erlang(Req, State) ->
    {ErtsVsn, Req1} = cowboy_req:qs_val(<<"erts">>, Req),
    Packages = rp:update(ErtsVsn),
    Binary = term_to_binary(Packages),
    {Binary, Req1, State}.

get_json(Req, State) ->
    case cowboy_req:binding(name, Req) of
        {undefined, Req1} ->
            [{pkgs, Json}] = ets:lookup(packages, pkgs),
            {Json, Req1, State};
        {Name, Req1} ->
            Packages = case cowboy_req:binding(vsn, Req1) of
                           {undefined, Req2} ->
                               rp:get_package(Name);
                           {Vsn, Req2} ->
                               rp:get_package(Name, Vsn)
                       end,
            case Packages of
                [] ->
                    {ok, Req3} = cowboy_req:reply(404, Req2),
                    {halt, Req3, State};
                _ ->
                    {jsx:encode(Packages), Req2, State}
            end
    end.

terminate(_Reason, _Req, _State) ->
    ok.
