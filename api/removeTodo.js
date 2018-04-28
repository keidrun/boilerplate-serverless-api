import Todo from '../models/Todo';

// curl -v -X DELETE -H 'x-api-key:MY_API_KEY' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
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
