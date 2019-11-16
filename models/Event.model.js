const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//TODO: Figure out how to store the location
//TODO: Do not store images
const EventSchema = Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  // creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // guests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  location: {
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  }
});

EventSchema.index({ location: '2dsphere' });
EventSchema.plugin(uniqueValidator);
const Event = model('Event', EventSchema);

module.exports = Event;
