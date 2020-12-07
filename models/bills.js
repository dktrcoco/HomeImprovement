const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  title: { type: String, required: true },
  value: { type: Number, required: true },
  start: { type: Date, default: Date.now },
  bill: { type: String, required: true }
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
