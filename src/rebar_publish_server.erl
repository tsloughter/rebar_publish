-module(rebar_publish_server).

-behaviour(gen_server).

%% API
-export([start_link/2
        ,publish/1
        ,update/0]).

%% gen_server callbacks
-export([init/1, handle_call/3, handle_cast/2, handle_info/2,
         terminate/2, code_change/3]).

-define(SERVER, ?MODULE).

-record(state, {rp_state}).

%%%===================================================================
%%% API
%%%===================================================================

start_link(LogState, S3) ->
    gen_server:start_link({local, ?SERVER}, ?MODULE, [LogState, S3], []).

publish(Repo) ->
    gen_server:call(?SERVER, {repo, Repo}, infinity).

update() ->
    gen_server:call(?SERVER, update).

%%%===================================================================
%%% gen_server callbacks
%%%===================================================================

init([LogState, S3]) ->
    SystemArch = list_to_binary(erlang:system_info(system_architecture)),
    ErtsVsn = list_to_binary(erlang:system_info(version)),
    {glibc, GlibcVsn, _, _} = erlang:system_info(allocator),
    GlibcVsnStr = list_to_binary(io_lib:format("~p.~p", GlibcVsn)),

    State = rp_state:new(LogState, ErtsVsn, SystemArch, GlibcVsnStr, S3),

    {ok, #state{rp_state=State}}.

handle_call({repo, Repo}, From, State=#state{rp_state=RPState}) ->
    proc_lib:spawn_link(fun() ->
                                lager:info("Repo ~p", [Repo]),
                                rebar_publish:handle_repo(RPState, Repo),
                                gen_server:reply(From, ok)
                        end),
    {noreply, State};
handle_call(update, From, State=#state{rp_state=RPState}) ->
    proc_lib:spawn_link(fun() ->
                                Packages = rebar_publish:update(RPState),
                                gen_server:reply(From, {ok, Packages})
                        end),
    {noreply, State}.

handle_cast(_Msg, State) ->
    {noreply, State}.

handle_info(_Info, State) ->
    {noreply, State}.

terminate(_Reason, _State) ->
    ok.

code_change(_OldVsn, State, _Extra) ->
    {ok, State}.

%%%===================================================================
%%% Internal functions
%%%===================================================================
