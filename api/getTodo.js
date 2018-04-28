import Todo from '../models/Todo';

// curl -v -H 'x-api-key:MY_API_KEY' http://localhost:3000/todos/cb3dc780-484f-11e8-a0b9-c36d84fa8971
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
