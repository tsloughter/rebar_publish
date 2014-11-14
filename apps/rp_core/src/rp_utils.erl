-module(rp_utils).

-export([create_tarball/3
        ,sh/2]).

-spec create_tarball(file:name(), string(), file:name()) -> ok.
create_tarball(Filename, AppNameVsn, AppDir) ->
    Files = [{filename:join(AppNameVsn, X), X}
            || X <- filelib:wildcard("**", binary_to_list(AppDir))
                   ,hd(filename:split(X)) =/= "deps"
                   ,hd(filename:split(X)) =/= ".git"],

    erl_tar:create(Filename
                  ,Files
                  ,[compressed]).

sh(Command, Options0) ->
    DefaultOptions = [{use_stdout, false}, debug_and_abort_on_error],
    Options = [expand_sh_flag(V)
               || V <- proplists:compact(Options0 ++ DefaultOptions)],
    ErrorHandler = fun(_Command, Err) ->
                           io:format("~p~n", [Err])
                   end,
    OutputHandler = proplists:get_value(output_handler, Options),

    PortSettings = proplists:get_all_values(port_settings, Options) ++
        [exit_status, {line, 16384}, use_stdio, stderr_to_stdout, hide],

    Port = open_port({spawn, Command}, PortSettings),

    case sh_loop(Port, OutputHandler, []) of
        {ok, _Output} = Ok ->
            Ok;
        {error, {_Rc, _Output}=Err} ->
            ErrorHandler(Command, Err)
    end.

expand_sh_flag(return_on_error) ->
    {error_handler,
     fun(_Command, Err) ->
             {error, Err}
     end};
expand_sh_flag(abort_on_error) ->
    {error_handler,
     fun log_and_abort/2};
expand_sh_flag({abort_on_error, Message}) ->
    {error_handler,
     log_msg_and_abort(Message)};
expand_sh_flag(debug_and_abort_on_error) ->
    {error_handler,
     fun debug_and_abort/2};
expand_sh_flag(use_stdout) ->
    {output_handler,
     fun(Line, Acc) ->
             io:format("~s", [Line]),
             [Line | Acc]
     end};
expand_sh_flag({use_stdout, false}) ->
    {output_handler,
     fun(Line, Acc) ->
             [Line | Acc]
     end};
expand_sh_flag({cd, _CdArg} = Cd) ->
    {port_settings, Cd};
expand_sh_flag({env, _EnvArg} = Env) ->
    {port_settings, Env}.

sh_loop(Port, Fun, Acc) ->
    receive
        {Port, {data, {eol, Line}}} ->
            sh_loop(Port, Fun, Fun(Line ++ "\n", Acc));
        {Port, {data, {noeol, Line}}} ->
            sh_loop(Port, Fun, Fun(Line, Acc));
        {Port, {exit_status, 0}} ->
            {ok, lists:flatten(lists:reverse(Acc))};
        {Port, {exit_status, Rc}} ->
            {error, {Rc, lists:flatten(lists:reverse(Acc))}}
    end.

-type err_handler() :: fun((string(), {integer(), string()}) -> no_return()).
-spec log_msg_and_abort(string()) -> err_handler().
log_msg_and_abort(Message) ->
    fun(_Command, {_Rc, _Output}) ->
            io:format(Message, [])
    end.

-spec log_and_abort(string(), {integer(), string()}) -> no_return().
log_and_abort(Command, {Rc, Output}) ->
    io:format("sh(~s)~n"
          "failed with return code ~w and the following output:~n"
          "~s", [Command, Rc, Output]).

-spec debug_and_abort(string(), {integer(), string()}) -> no_return().
debug_and_abort(Command, {Rc, Output}) ->
    io:format("sh(~s)~n"
          "failed with return code ~w and the following output:~n"
          "~s", [Command, Rc, Output]),
    throw(rebar_abort).
