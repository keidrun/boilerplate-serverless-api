import Todo from '../models/Todo';

// curl -v -X DELETE -H 'x-api-key:MY_API_KEY' http://localhost:3000/todos/c1bd150c-f5d9-4a3b-8193-423c41537024
const removeTodo = (event, context, callback) => {
  const { id } = event.pathParameters;

  Todo.delete({ id })
    .then(() =>
      callback(null, {
        statusCode: 204
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
