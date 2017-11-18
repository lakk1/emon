const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

const isDev = process.env.NODE_ENV === 'development';

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    saveUninitialized: true,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  if (isDev) {
    app.use(morgan('dev'));
  }
};
