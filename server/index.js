/* eslint-disable no-console */

require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

const middlewares = require('./config/middlewares');
const apiRoutes = require('./modules');

require('./config/databases');

middlewares(app);

apiRoutes(app);

if (process.env.NODE_ENV == 'production') {

  app.use(express.static(path.resolve(__dirname, '../client/build')));

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running on port: ${process.env.PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
