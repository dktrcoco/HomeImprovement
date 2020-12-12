const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  start: { type: Date, default: Date.now }, 
  end: { type: Date, default: Date.now },
  allDay: Boolean,
  resource: String,
  event: { type: String, required: true },
  googleId: { type: String, required: true}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
