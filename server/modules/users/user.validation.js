const Joi = require('joi');

const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/;

module.exports = {
  passwordReg,
  signup: {
    body: Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      // firstName: Joi.string().required(),
      password: Joi.string()
        .regex(passwordReg)
        .required(),
      // lastName: Joi.string().required(),
      // userName: Joi.string().required(),
    }),
  },
};
