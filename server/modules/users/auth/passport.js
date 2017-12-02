const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../user.model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // console.log(`id: ${id}`);
  User.findById(id)
    .then(({ _id, email, role }) => {
      done(null, { _id, email, role });
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
});

/**
 * Sign in using Email and Password.
 */
const localOpts = {
  usernameField: 'email',
};

const localLogin = new LocalStrategy(localOpts, async (email, password, done) => {
  try {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return done(null, false);
    } else if (!user.authenticateUser(password)) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});

passport.use(localLogin);
