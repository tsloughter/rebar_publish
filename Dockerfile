# DOCKER-VERSION 0.3.4

FROM ubuntu:14.04.1

RUN apt-get update -y
RUN apt-get install wget -y
RUN wget http://packages.erlang-solutions.com/site/esl/esl-erlang/FLAVOUR_1_general/esl-erlang_17.1-1~ubuntu~trusty_amd64.deb
RUN dpkg --force-depends -i esl-erlang_17.1-1~ubuntu~trusty_amd64.deb
RUN apt-get -f install -y

RUN mkdir -p /opt/bin/
RUN wget https://github.com/rebar/rebar/releases/download/2.5.1/rebar -O /opt/bin/rebar
RUN chmod +x /opt/bin/rebar

RUN apt-get install git -y

VOLUME ["/opt/src/"]

ENV PATH /opt/bin/:$PATH

RUN groupadd docker
RUN useradd -g docker -d /home/docker -m docker
USER docker
CMD cd /opt/src ; /opt/bin/rebar get-deps compile -r
