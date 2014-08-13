-module(rp_state).

-export([new/5
        ,log_state/1
        ,erts_vsn/1
        ,system_arch/1
        ,glibc/1
        ,s3/1]).

-export_type([t/0]).

-record(rp_state_t, {log_state :: ec_cmd_log:t(),
                     erts_vsn :: binary(),
                     system_arch :: binary(),
                     glibc :: binary(),
                     s3}).

-opaque t() :: record(rp_state_t).

new(LogState, ErtsVsn, SystemArch, GlibcVsn, S3) ->
    #rp_state_t{log_state=LogState,
                erts_vsn=ErtsVsn,
                system_arch=SystemArch,
                glibc=GlibcVsn,
                s3=S3}.

log_state(#rp_state_t{log_state=LogState}) ->
    LogState.

erts_vsn(#rp_state_t{erts_vsn=ErtsVsn}) ->
    ErtsVsn.

system_arch(#rp_state_t{system_arch=SystemArch}) ->
    SystemArch.

glibc(#rp_state_t{glibc=GlibcVsn}) ->
    GlibcVsn.

s3(#rp_state_t{s3=S3}) ->
    S3.
