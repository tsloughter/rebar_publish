-module(rp_src_pkgs).

-export([upload_src/2]).

upload_src(State, Tag) ->
    Bucket = rp_state:bucket(State),
    Collection = rp_state:collection(State),
    S3Creds = rp_state:s3(State),

    SrcApps = rp_app_discovery:get_src_apps(State, [<<".">>], Tag),

    % Build tarballs and upload to s3
    lists:foreach(fun(App) ->
                          rp_upload:upload_app(App, Collection, S3Creds, Bucket)
                  end, SrcApps).
