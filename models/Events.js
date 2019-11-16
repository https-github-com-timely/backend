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

module.exports = mongoose.model("events", EventSchema);
