import Todo from '../models/Todo';

// curl -X DELETE -H 'x-api-key:MY_API_KEY' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
const removeTodo = (event, context, callback) => {
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

export default removeTodo;
