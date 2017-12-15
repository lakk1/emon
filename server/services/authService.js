exports.checkAuth = function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(400).send('Please Login');
  }
};
