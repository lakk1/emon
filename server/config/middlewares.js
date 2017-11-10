const bodyParser = require('body-parser');

const isDev = process.env.NODE_ENV === 'development';

module.exports = (app) => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	if (isDev) {
		app.use(require('morgan')('dev'));
	}
};
