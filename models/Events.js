const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String
  },
  time: {
    type: Date
  }
});

mongoose.model("events", eventSchema);
