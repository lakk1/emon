/* eslint-disable no-console */

require('dotenv').config();

const express = require('express');
const app = express();

const middlewares = require('./config/middlewares');
const apiRoutes = require('./modules');

require('./config/databases');
middlewares(app);

apiRoutes(app);

app.listen(process.env.PORT, (err) => {
	if (err) {
		throw err;
	}
	console.log(`Server running on port: ${process.env.PORT}`);
	console.log(`Environment: ${process.env.NODE_ENV}`);
});
