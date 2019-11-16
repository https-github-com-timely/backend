const mongoose = require('mongoose');
const validator = require('validator');
const { Schema, model } = mongoose;

//Add jwts
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    validate: val => {
      if (!validator.isEmail(val)) {
        throw new Error('This email already is already registered!');
      }
    }
  },
  age: {
    type: Number,
    required: true,
    validate: val => {
      if (val <= 0 || val >= 100) {
        throw new Error('Your age is invalid choose a new age');
      }
    }
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  }
  //Gender??? later
});

const User = model('User', UserSchema);

module.exports = User;
