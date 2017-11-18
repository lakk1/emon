const HTTPStatus = require('http-status');

const User = require('./user.model');

exports.signup = async function (req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(HTTPStatus.CREATED).json(user.toJson());
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).send(error);
  }
};

exports.login = async function (req, res) {
  return res.status(HTTPStatus.OK).send(req.user.toJson());
};
exports.getuser = async function (req, res) {
  if (req.user) {
    return res.send(req.user);
  }
  return res.send('noo passport');
};
