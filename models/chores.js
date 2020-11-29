const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choreSchema = new Schema({
  chore: { type: String, required: true },
  owner: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Chore = mongoose.model("Chore", choreSchema);

module.exports = Chore;
