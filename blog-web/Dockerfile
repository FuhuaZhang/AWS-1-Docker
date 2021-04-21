# The first thing we need to do is define from what image we want to build from.
FROM node:14

MAINTAINER "Fuhua Zhang <3102207728@qq.com>"

COPY ./ /usr/src/app

# Create a directory to hold the application code inside the image, working directory
WORKDIR /usr/src/app

RUN set -xe \
    && yarn install \
    && yarn build

CMD ["yarn", "start"]

EXPOSE 3000
