%%%-------------------------------------------------------------------
%%% @author Tristan Sloughter <t@crashfast.com>
%%% @copyright (C) 2014, Tristan Sloughter
%%% @doc
%%%
%%% @end
%%% Created : 02 Jul 2014 by Tristan Sloughter <t@crashfast.com>
%%%-------------------------------------------------------------------
-module(rp_web_handler).

-export([init/3]).
-export([handle/2]).
-export([terminate/3]).

init(_Transport, Req, _) ->
    {ok, Req, []}.

handle(Req, State) ->
    case application:get_env(rp_web, base) of
        {ok, {priv_dir, App, Path, Name}} ->
            BaseFile = filename:join([code:priv_dir(App), Path, Name]),
            F = fun (Socket, Transport) ->
                        Transport:sendfile(Socket, BaseFile)
                end,
            Req2 = cowboy_req:set_resp_body_fun(F, Req),
            {ok, Req3} = cowboy_req:reply(200, [{<<"content-type">>, <<"text/html">>}], Req2),
            {ok, Req3, State}
    end.

terminate(_Reason, _Req, _State) ->
    ok.
