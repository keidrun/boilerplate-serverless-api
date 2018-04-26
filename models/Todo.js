import dynamoose from '../services/dynamoose';
const { Schema } = dynamoose;

const options = {
  throughput: {
    read: 1,
    write: 1
  },
  timestamps: true
};

const todoSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true
    },
    todo: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  options
);

const Todo = dynamoose.model('todos', todoSchema);
export default Todo;
