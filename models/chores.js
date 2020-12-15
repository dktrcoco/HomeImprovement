const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choreSchema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  start: { type: Date, default: Date.now },
  end: Date,
  allDay: { type: Boolean, default: true },
  resource: String,
  googleId: { type: String, required: true },
});

const Chore = mongoose.model("Chore", choreSchema);

module.exports = Chore;
