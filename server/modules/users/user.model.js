const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;
const validator = require('validator');

const { passwordReg } = require('./user.validation');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required!'],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email!',
    },
  },
  firstName: {
    type: String,
    // required: [true, 'FirstName is required!'],
    trim: true,
  },
  lastName: {
    type: String,
    // required: [true, 'LastName is required!'],
    trim: true,
  },
  userName: {
    type: String,
    // required: [true, 'UserName is required!'],
    trim: true,
    // unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minlength: [6, 'Password need to be longer!'],
    validate: {
      validator(password) {
        return passwordReg.test(password);
      },
      message: '{VALUE} is not a valid password!',
    },
  },
  role: {
    type: String,
    default: 'user',
  },
  google: {},
  facebook: {},
  github: {},
});

UserSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashedPassword(this.password);
  }

  return next();
});

UserSchema.methods = {
  _hashedPassword(password) {
    return bcrypt.hashSync(password, 10);
  },

  authenticateUser(password) {
    return bcrypt.compareSync(password, this.password);
  },

  toJson() {
    return {
      _id: this._id,
      email: this.email,
      role: this.role,
    };
  },
};

const userModel = mongoose.model('User', UserSchema);

module.exports = userModel;
