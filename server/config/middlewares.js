const bodyParser = require('body-parser');
const { celebrate, Joi, errors } = require('celebrate');
const isDev = process.env.NODE_ENV === 'development';

module.exports = (app) => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(errors());

	if (isDev) {
		app.use(require('morgan')('dev'));
	}
};
