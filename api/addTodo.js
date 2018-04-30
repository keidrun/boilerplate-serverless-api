import Todo from '../models/Todo';

// curl -X POST -H 'Content-Type:application/json' -H 'x-api-key:MY_API_KEY' -d '{"task":"Add new todo"}' http://localhost:3000/todos
const addTodo = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { task } = body;
  if (!task) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: `The property "todo" is required.`
      })
    });
  }

  const newTodo = new Todo({ task });
  newTodo
    .save({ overwrite: false })
    .then(addedTodo =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(addedTodo)
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

export default addTodo;
