#!/bin/bash

set -e

if type docker.io >/dev/null 2>&1; then
    DOCKER=docker.io
else
    DOCKER=docker
fi

for OTP_VERSION in 17.1 #17.3 17.1 17.0 R16B03 R16B02 R16B01 R16B
do
    OTP_NAME=$(sed -e 's/./\U&/g' <<< $OTP_VERSION)

    $DOCKER build -t="tsloughter/erlang:base" - <<EOF
FROM ubuntu:14.04.1

RUN apt-get update
RUN apt-get install -y wget
RUN apt-get install -y build-essential libncurses5-dev openssl libssl-dev fop xsltproc unixodbc-dev libglib2.0-dev git autoconf

RUN git clone https://github.com/metadave/erln8.git
RUN cd erln8 ; make && make install

RUN mkdir -p /opt/bin/
RUN wget https://github.com/rebar/rebar/releases/download/2.5.1/rebar -O /opt/bin/rebar
RUN chmod +x /opt/bin/rebar

RUN groupadd docker
RUN useradd -g docker -d /home/docker -m docker

USER docker
ENV HOME /home/docker
RUN erln8 --init
RUN erln8 --clone default

EOF

cat >Dockerfile <<EOF
FROM tsloughter/erlang:base

USER docker

ENV OTP_VERSION $OTP_VERSION

RUN erln8 --build --tag OTP_R16B02 --id r16b02

VOLUME ["/opt/src/"]

ENV PATH /opt/bin/:$PATH

CMD cd /opt/src ; /opt/bin/rebar get-deps compile -r

EOF

    $DOCKER build -t="tsloughter/erlang:${OTP_VERSION}" .

    rm Dockerfile

    $DOCKER push heroku/erlang
done
