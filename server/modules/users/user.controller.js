const HTTPStatus = require('http-status');

const User = require('./user.model');
const Note = require('../notes/notes.model');

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

exports.logout = async function (req, res) {
  req.logout();
  res.redirect('/');
};

exports.getuser = async function (req, res) {
  if (req.user) {
    return res.status(HTTPStatus.OK).send(req.user);
  }
  return res.status(HTTPStatus.FORBIDDEN).json({ error: 'please check password and username' });
};

exports.userStatus = function (req, res) {
  if (req.isAuthenticated()) {
    res.status(HTTPStatus.OK).json({ status: true });
  } else {
    res.status(HTTPStatus.UNAUTHORIZED).json({ status: false });
  }
};

exports.userNotes = async function (req, res) {
  try {
    const userNotes = await Note.find({ author: req.body._id });
    return res.status(HTTPStatus.OK).send(userNotes);
  } catch (err) {
    return res.status(HTTPStatus.BAD_REQUEST).send(err);
  }
};
