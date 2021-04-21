## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
yarn
```

## Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

## Running the app with docker
```bash
# build image
docker build . -t your_username/image_name

# run the image
docker run -p host_port:container_port -d your_name/image_name

# get container ID
docker ps

# check the logs
docker logs container_id --follow

# go inside the container
docker exec -it container_id bash
```
then you can access this application via `localhost:host_port`.

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```