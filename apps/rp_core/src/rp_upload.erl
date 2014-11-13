-module(rp_upload).

-export([upload_app/4
        ,upload_tarball/4]).

-include_lib("erlcloud/include/erlcloud.hrl").
-include_lib("erlcloud/include/erlcloud_aws.hrl").
-include_lib("kernel/include/file.hrl").

-define(CHUNK_SIZE, 5242880).

-spec upload_app(rp_app_info:t(), string(), aws_config(), string()) -> ok.
upload_app(App, Collection, S3Creds, Bucket) ->
    AppNameVsn = rp_app_info:name_vsn_string(App),
    AppDir = rp_app_info:dir(App),
    Key = rp_app_info:key(App),
    Filename = AppNameVsn++".tar.gz",
    % Create Archive, pruning out deps dir and .git
    ok = rp_utils:create_tarball(Filename, AppNameVsn, AppDir),

    % Upload arhive
    lager:info("at=publishing app=~s key=~s bucket=~s", [AppNameVsn, Key, Bucket]),
    ok = rp_upload:upload_tarball(Filename, Key, S3Creds, Bucket),

    % Create and upload package to datastore
    PackageJson = rp_app_info:json(App),
    lager:info("~p~n", [orchestrate_client:kv_put(Collection, Key, PackageJson)]).

-spec upload_tarball(file:name(), string(), tuple(), string()) -> ok.
upload_tarball(Filename, Key, S3, Bucket) ->
    case file:read_file_info(Filename) of
        {ok, #file_info{size=Size}} when Size < ?CHUNK_SIZE ->
            try
                {ok, Data} = file:read_file(Filename),
                erlcloud_s3:put_object(Bucket, Key, [Data], S3),
                lager:info("at=completed_upload_to_s3 key=~s", [Key])
            catch
                C:T ->
                    lager:error("at=failed_single_upload_to_s3 key=~s error=~p reason=~p", [Key, C, T])
            end;
        _ ->
            {ok, Fd} = file:open(Filename, [read, raw]),
            {ok, [{uploadId, UploadId}]} = erlcloud_s3:start_multipart(Bucket
                                                                      ,Key
                                                                      ,[]
                                                                      ,[]
                                                                      ,S3),
            try
                Etags = upload_tarball(Fd, Key, UploadId, S3, Bucket, 1, [], file:read(Fd, ?CHUNK_SIZE)),
                erlcloud_s3:complete_multipart(Bucket, Key, UploadId, Etags, [], S3),
                lager:info("at=completed_upload_to_s3 key=~s", [Key])
            catch
                C:T ->
                    lager:error("at=failed_multipart_upload_to_s3 key=~s error=~p reason=~p", [Key, C, T]),
                    erlcloud_s3:abort_multipart(Bucket, Key, UploadId, [], [], S3)
            after
                file:close(Fd)
            end
    end.

upload_tarball(_Fd, _Key, _UploadId, _S3, _Bucket, _, Etags, eof) ->
    lists:reverse(Etags);
upload_tarball(Fd, Key, UploadId, S3, Bucket, PartNumber, Etags, {ok, Data}) ->
    {ok, [{etag, Etag}]} = erlcloud_s3:upload_part(Bucket
                                                  ,Key
                                                  ,UploadId
                                                  ,PartNumber
                                                  ,Data
                                                  ,[]
                                                  ,S3),
    upload_tarball(Fd, Key, UploadId, S3, Bucket, PartNumber+1,
                   [{PartNumber, Etag} | Etags], file:read(Fd, ?CHUNK_SIZE)).
