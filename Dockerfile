FROM node:16

RUN apt update && \
  apt install -y vim

COPY --chmod=777 ./root /root/
