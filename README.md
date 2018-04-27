# boilerplate-serverless-api

Boilerplate of Serverless framework with DynamoDB for API.

## Install

* Just `git clone` this repository
* Then `yarn install`

## Prepare configurations

Make `config.yml` file in `config` directory then edit those files.
For example,

```
$ mkdir config
$ touch config/config.yml
$ vi config/config.yml
dev:
  DYNAMO_AWS_ACCESS_KEY_ID: YOUR_AWS_ID
  DYNAMO_AWS_SECRET_ACCESS_KEY: YOUR_AWS_KEY
  DYNAMO_AWS_REGION: YOUR_AWS_REGION
staging:
  DYNAMO_AWS_ACCESS_KEY_ID: YOUR_AWS_ID
  DYNAMO_AWS_SECRET_ACCESS_KEY: YOUR_AWS_KEY
  DYNAMO_AWS_REGION: YOUR_AWS_REGION
prod:
  DYNAMO_AWS_ACCESS_KEY_ID: YOUR_AWS_ID
  DYNAMO_AWS_SECRET_ACCESS_KEY: YOUR_AWS_KEY
  DYNAMO_AWS_REGION: YOUR_AWS_REGION
```

## API endpoints

After `yarn dev:deploy`, endpoints are below.
Http header `x-api-key` is requred to request.

* GET - `https://YOUR_AWS_URL/dev/todos`
* GET - `https://YOUR_AWS_URL/dev/todos/{id}`
* POST - `https://YOUR_AWS_URL/dev/todos`
* DELETE - `https://YOUR_AWS_URL/dev/todos/{id}`
* PATCH - `https://YOUR_AWS_URL/dev/todos/{id}`

If you wanna work locally, do `yarn db:init` for dynamodb-local, then do `yarn start`.
Local endpoins are below.
Http header `x-api-key` is requred to request also.

* GET - `http://localhost:3000/todos`
* GET - `http://localhost:3000/todos/{id}`
* POST - `http://localhost:3000/todos`
* DELETE - `http://localhost:3000/todos/{id}`
* PATCH - `http://localhost:3000/todos/{id}`
