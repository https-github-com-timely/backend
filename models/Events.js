const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection(process.env.MONGO_URI, { useNewUrlParser: true });

autoIncrement.initialize(connection);

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
  ]
});

EventSchema.plugin(autoIncrement.plugin, { model: "Event" , field: "event_id"})

module.exports = mongoose.model("events", EventSchema);
