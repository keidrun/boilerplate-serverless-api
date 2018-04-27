import Todo from '../models/Todo';

// curl -X PATCH -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"task":"Update the todo", "completed":true}' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
// curl -X PATCH -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"task":"Update the todo only"}' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
// curl -X PATCH -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"completed":true}' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
const updateTodo = (event, context, callback) => {
  const { id } = event.pathParameters;
  const { task, completed } = JSON.parse(event.body);

  Todo.update({ id }, { $PUT: { task, completed } })
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

export default updateTodo;
