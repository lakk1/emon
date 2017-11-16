const express = require('express');

const router = express.Router();
const validation = require('express-validation');

const userController = require('./user.controller');
const { signup } = require('./user.validation');

router.post('/user/signup', validation(signup), userController.signup);
router.post('/user/login', userController.login);

module.exports = router;
