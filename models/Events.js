const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  location: {
    lat: {
      type: Number
    },
    long: {
      type: Number
    }
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
  ],
  hidden: {
    type: Boolean
  }
});

module.exports = mongoose.model("events", EventSchema);
