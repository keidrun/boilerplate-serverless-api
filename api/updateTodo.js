import Todo from '../models/Todo';

// curl -X PATCH -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"task":"Update the todo", "completed":true}' http://localhost:3000/todos/87dd235b-909d-4381-ab4e-8b3cd20af34b
// curl -X PATCH -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"task":"Update the todo only"}' http://localhost:3000/todos/87dd235b-909d-4381-ab4e-8b3cd20af34b
// curl -X PATCH -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"completed":true}' http://localhost:3000/todos/87dd235b-909d-4381-ab4e-8b3cd20af34b
const updateTodo = (event, context, callback) => {
  const { id } = event.pathParameters;
  const { task, completed } = JSON.parse(event.body);
  let todo = {};
  if (task) todo.task = task;
  if (completed) todo.completed = completed;

  Todo.update({ id }, { $PUT: todo })
    .then(updatedTodo =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(updatedTodo)
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

export default updateTodo;
