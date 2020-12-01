const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// if i wanted to check for duplicates it will have to be
// a mixture of front and back end
// front end might be easier to implement
const choreSchema = new Schema({
  chore: { type: String, required: true },
  owner: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Chore = mongoose.model("Chore", choreSchema);

module.exports = Chore;
