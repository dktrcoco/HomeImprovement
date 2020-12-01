const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  bill: { type: String, required: true },
  value: { type: Number, require: true },
  date: { type: Date, default: Date.now }
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;