-module(rp).

-export([publish/1
        ,update/1
        ,get_package/1
        ,get_package/2]).

publish([_Name, Desc, Tags, Repo]) ->
    Tags1 = [list_to_binary(S) || S <- [string:strip(Tag, both) || Tag <- string:tokens(Tags, ",")]],
    {ok, AccessId} = application:get_env(rp_core, s3_access_id),
    {ok, SecretKey} = application:get_env(rp_core, s3_secret_key),
    Bucket = application:get_env(rp_core, bucket, ""),

    S3Creds = erlcloud_s3:new(AccessId, SecretKey),
    Collection = application:get_env(rp_core, collection, ""),
    rp_repo:handle_repo(rp_state:new(Bucket, S3Creds, Collection), Desc, Tags1, Repo).

update(ErtsVsn) ->
    rp_update:do(ErtsVsn).

get_package(Name) ->
    case ets:lookup(packages, Name) of
        [] ->
            [];
        [{Name, Result} | _]=Results ->
            dict:to_list(merge_packages(Results, dict:from_list(Result)))
    end.

get_package(Name, Vsn) ->
    Results = ets:lookup(packages, Name),
    Result = find_vsn(Vsn, Results),
    dict:to_list(merge_packages(Results, dict:from_list(Result))).

%% Internal functions

find_vsn(_Vsn, []) ->
    [];
find_vsn(Vsn, [{_, Package} | T]) ->
    case proplists:get_value(<<"vsn">>, Package, <<"">>) of
        Vsn ->
            Package;
        _ ->
            find_vsn(Vsn, T)
    end.

merge_packages([], Dict) ->
    Dict;
merge_packages([{_, Package} | T], Dict) ->
    Vsn = proplists:get_value(<<"vsn">>, Package, <<"">>),
    ErtsVsn = proplists:get_value(<<"erts">>, Package, <<"">>),
    Dict1 = dict:append(<<"vsns">>, Vsn, Dict),
    Dict2 = dict:append(<<"erts_vsns">>, ErtsVsn, Dict1),
    merge_packages(T, Dict2).
