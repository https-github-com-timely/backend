const {
  mongoose: { Schema, model }
} = require('mongoose');

const EventSchema = new Schema({
  title:String,
  description:String,
  location:String, //Location optional
  creator:
  images:
  participants:
});

const Event = model('Event', EventSchema);


export const Event;