const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const isDev = process.env.NODE_ENV === 'development';

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    saveUninitialized: true,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  if (isDev) {
    app.use(morgan('dev'));
  }
};
