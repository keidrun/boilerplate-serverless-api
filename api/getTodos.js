import Todo from '../models/Todo';

// curl -H 'x-api-key:MY_API_KEY' http://localhost:3000/todos
const getTodos = (event, context, callback) => {
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

export default getTodos;
