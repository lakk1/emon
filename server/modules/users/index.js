const express = require('express');
const passport = require('passport');
const authServices = require('../../services/authService');

require('./auth/passport');

const router = express.Router();
const validation = require('express-validation');

const userController = require('./user.controller');
const { signup } = require('./user.validation');

router.post('/user/signup', validation(signup), userController.signup);
router.post('/user/login', passport.authenticate('local'), userController.login);
router.get('/user/logout', userController.logout);
router.get('/user/', userController.getuser);
router.get('/user/status', userController.userStatus);
router.get('/user/notes', authServices.checkAuth, userController.userNotes);

module.exports = router;
