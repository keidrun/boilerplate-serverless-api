import uuid from 'uuid';
import Todo from '../models/Todo';

// curl -H 'x-api-key:MY_API_KEY' http://localhost:3000/todos
export const getTodos = (event, context, callback) => {
  Todo.scan()
    .exec()
    .then(todos =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(todos)
      })
    )
    .catch(err =>
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: err
        })
      })
    );
};

// curl -H 'x-api-key:MY_API_KEY' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
export const getTodo = (event, context, callback) => {
  const { id } = event.pathParameters;

  Todo.get(id)
    .then(todo =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(todo)
      })
    )
    .catch(err =>
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: err
        })
      })
    );
};

// curl -X POST -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"todo":"Add new todo"}' http://localhost:3000/todos
export const addTodo = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { todo } = body;
  if (!todo) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: `The property "todo" is required.`
      })
    });
  }

  const newTodo = new Todo({ id: uuid.v1(), todo });
  newTodo
    .save()
    .then(addedTodo =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Added the todo of id:${addedTodo.id}`,
          addedTodo
        })
      })
    )
    .catch(err =>
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: err
        })
      })
    );
};

// curl -X DELETE -H 'x-api-key:MY_API_KEY' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
export const removeTodo = (event, context, callback) => {
  const { id } = event.pathParameters;

  Todo.delete({ id })
    .then(param =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Removed the todo of id:${param.id}`
        })
      })
    )
    .catch(err =>
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: err
        })
      })
    );
};

// curl -X PATCH -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"todo":"Update the todo", "completed":true}' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
// curl -X PATCH -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"todo":"Update the todo only"}' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
// curl -X PATCH -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"completed":true}' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
export const updateTodo = (event, context, callback) => {
  const { id } = event.pathParameters;
  const { todo, completed } = JSON.parse(event.body);

  Todo.update({ id }, { $PUT: { todo, completed } })
    .then(updatedTodo =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Updated the todo of id:${id}`,
          updatedTodo
        })
      })
    )
    .catch(err =>
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: err
        })
      })
    );
};
