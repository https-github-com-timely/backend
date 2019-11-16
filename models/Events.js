const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var uniqueValidator = require("mongoose-unique-validator");

const EventSchema = Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  time: {
    type: Date,
    required: true
  },
  creator_id: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  guest_ids: [
    {
      type: String
    }
  ]
});

mongoose.model("events", EventSchema);
