-module(rp_state).

-export([new/3
        ,s3/1
        ,images/1
        ,collection/1
        ,bucket/1]).

-export_type([t/0]).

-record(rp_state_t, {s3,
                     collection :: binary(),
                     bucket :: binary(),
                     images=[] :: list()}).

-opaque t() :: record(rp_state_t).

new(Bucket, S3, Collection) ->
    #rp_state_t{s3=S3
               ,collection=Collection
               ,bucket=Bucket}.

s3(#rp_state_t{s3=S3}) ->
    S3.

images(#rp_state_t{images=Images}) ->
    Images.

collection(#rp_state_t{collection=Collection}) ->
    Collection.

bucket(#rp_state_t{bucket=Bucket}) ->
    Bucket.
