import Todo from '../models/Todo';

// curl -v -H 'x-api-key:MY_API_KEY' http://localhost:3000/todos/87dd235b-909d-4381-ab4e-8b3cd20af34b
const getTodo = (event, context, callback) => {
  const { id } = event.pathParameters;

  Todo.get(id)
    .then(
      todo =>
        todo
          ? callback(null, {
              statusCode: 200,
              body: JSON.stringify(todo)
            })
          : callback(null, {
              statusCode: 404
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

export default getTodo;
