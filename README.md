## Rebar Publish: For Building and Publish Erlang Applications

Given a repo url this tool builds apps for every git tag in the repo and publishes the app and its dependencies to S3, along with a index of these packages to [Orchestrate](http://orchestrate.io/).

### Requirements

* [Docker](http://www.docker.io)
* [Orchestrate](http://orchestrate.io/) account
* [AWS S3](http://aws.amazon.com/s3/) or compatible account
* [Rebar](https://github.com/rebar/rebar/releases) in you path
* [Relx](https://github.com/erlware/relx/releases) in your path

### Configure

```erlang
{erldocker, [
            {unixbridge_port, 32133}
            ,{docker_http, <<"http://localhost:32133">>}
            ]},

{rebar_publish, [{s3_bucket, "rebar_packages"}
                ,{s3_access_id, ""}
                ,{s3_secret_key, ""}

                ,{orchestrate_api_key, <<"">>}
                ,{orchestrate_collection, <<"packages">>}

                ,{images, [{<<"tsloughter">>, <<"erlang">>, <<"17.1">>}]}]}
```

### Build Release

```erlang
$ rebar get-deps compile -r
$ relx
$ _rel/rebar_publish/bin/rebar_publish console
```

### Build and Publish Package

```erlang
> rebar_publish_server:publish("https://github.com/erlware/relx.git").
```

### Key Path and Index

The packages are uploaded to S3 under the key:

```
/generic/ErtsVsn/AppName/Version/AppName-Version.tar.gz
```

Or in the case that the app contains platform specific code:

```
/SystemArch/GlibcVsn/ErtsVsn/AppName/Version/AppName-Version.tar.gz
```

The app's info is also inserted to a collection in Orchestrate:

```json
{
  "name": "erlydtl",
  "vsn": "0.9.0",
  "erts": "6.1",
  "link": "https://s3.amazonaws.com/rebar_packages/generic/6.1/erlydtl/0.9.0/erlydtl.tar.gz",
  "desc": "",
  "deps": [],
  "arch": "generic"
}
```
