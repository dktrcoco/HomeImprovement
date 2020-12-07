const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  title: { type: String, required: true },
  billValue: { type: Number, required: true },
  billDate: { type: Date, default: Date.now },
  bill: { type: String, required: true }
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
