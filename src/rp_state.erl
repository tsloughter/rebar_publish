-module(rp_state).

-export([new/7
        ,erts_vsn/1
        ,system_arch/1
        ,glibc/1
        ,s3/1
        ,images/1
        ,collection/1
        ,bucket/1]).

-export_type([t/0]).

-record(rp_state_t, {erts_vsn :: binary(),
                     system_arch :: binary(),
                     glibc :: binary(),
                     s3,
                     collection :: binary(),
                     bucket :: binary(),
                     images :: list()}).

-opaque t() :: record(rp_state_t).

new(ErtsVsn, SystemArch, GlibcVsn, S3, Images, Collection, Bucket) ->
    #rp_state_t{erts_vsn=ErtsVsn,
                system_arch=SystemArch,
                glibc=GlibcVsn,
                s3=S3,
                images=Images,
                collection=Collection,
                bucket=Bucket}.

erts_vsn(#rp_state_t{erts_vsn=ErtsVsn}) ->
    ErtsVsn.

system_arch(#rp_state_t{system_arch=SystemArch}) ->
    SystemArch.

glibc(#rp_state_t{glibc=GlibcVsn}) ->
    GlibcVsn.

s3(#rp_state_t{s3=S3}) ->
    S3.

images(#rp_state_t{images=Images}) ->
    Images.

collection(#rp_state_t{collection=Collection}) ->
    Collection.

bucket(#rp_state_t{bucket=Bucket}) ->
    Bucket.
