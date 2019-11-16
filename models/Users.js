const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  facebook_id: {
    type: String,
    required: true
  },
  profile_pic: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    validate: val => {
      if (!validator.isEmail(val)) {
        throw new Error("Invalid email address");
      }
    }
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  description: {
    type: String
  },
  interests: [
    {
      type: String
    }
  ],
  rating: {
    type: Number,
    min: 0,
    max: 5
  }
});

mongoose.model("users", UserSchema);
