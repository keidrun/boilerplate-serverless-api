import dynamoose from 'dynamoose';

let defaultOptions = {
  create: true,
  prefix: `${process.env.SERVICE_NAME}_`,
  suffix: `_${process.env.STAGE}`
};

if (process.env.NODE_ENV === 'production') {
  defaultOptions.create = false;

  dynamoose.AWS.config.update({
    accessKeyId: process.env.DYNAMO_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMO_AWS_SECRET_ACCESS_KEY,
    region: process.env.DYNAMO_AWS_REGION
  });
} else if (process.env.NODE_ENV === 'staging') {
  dynamoose.AWS.config.update({
    accessKeyId: process.env.DYNAMO_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMO_AWS_SECRET_ACCESS_KEY,
    region: process.env.DYNAMO_AWS_REGION
  });
} else {
  // process.env.NODE_ENV === 'development' or others
  dynamoose.AWS.config.update({
    region: 'localhost'
  });
  dynamoose.local('http://localhost:8000');
}

dynamoose.setDefaults(defaultOptions);

export default dynamoose;
