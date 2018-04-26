# boilerplate-serverless-api

Boilerplate of Serverless framework with DynamoDB for API.

## Install

* Just `git clone` this repository
* Then `yarn install`

## API endpoints

After `yarn dev:deploy`, endpoints are below.
Http header `x-api-key` is requred to request.

* GET - https://YOUR_AWS_URL/dev/todos
* GET - https://YOUR_AWS_URL/dev/todos/{id}
* POST - https://YOUR_AWS_URL/dev/todos
* DELETE - https://YOUR_AWS_URL/dev/todos/{id}
* PATCH - https://YOUR_AWS_URL/dev/todos/{id}

If you wanna work locally, do `yarn db:init` for dynamodb-local then do `yarn start`.
Local endpoins are below.
Http header `x-api-key` is requred to request also.

* GET - http://localhost:3000/todos
* GET - http://localhost:3000/todos/{id}
* POST - http://localhost:3000/todos
* DELETE - http://localhost:3000/todos/{id}
* PATCH - http://localhost:3000/todos/{id}

## NOTE

[serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local) might have any bugs because GET requests don't work locally, however they work well on aws.
