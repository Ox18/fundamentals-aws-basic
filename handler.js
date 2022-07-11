'use strict';



module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello Serverless!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.helloUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hola Wilmer"
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.helloAccount = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hola account con id: " + event.pathParameters.accountId
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

const querystring = require('querystring');

module.exports.createServers = async (event) => {
  const body = querystring.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Peticion para crear usuarios",
      input: body
    }, null, 2)
  }
}
