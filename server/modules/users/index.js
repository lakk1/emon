const express = require('express');
const passport = require('passport');

require('./auth/passport');

const router = express.Router();
const validation = require('express-validation');

const userController = require('./user.controller');
const { signup } = require('./user.validation');

router.post('/user/signup', validation(signup), userController.signup);
router.post('/user/login', passport.authenticate('local'), userController.login);
router.get('/user/', userController.getuser);

module.exports = router;
