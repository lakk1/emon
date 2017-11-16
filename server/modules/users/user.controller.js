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

exports.allPosts = async function (req, res) {
  try {
    const allUsers = await User.find({});
    return res.status(HTTPStatus.OK).send(allUsers);
  } catch (err) {
    return res.status(HTTPStatus.BAD_REQUEST).send(err);
  }
};

exports.login = async function (req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user.authenticateUser(password)) {
      return res.status(HTTPStatus.UNAUTHORIZED).send('user');
    }
    return res.status(HTTPStatus.OK).send(user);
  } catch (err) {
    return res.status(HTTPStatus.BAD_REQUEST).send(err);
  }
};
