const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
  item: { type: String, required: true },
  // userID: { type: String, required: true },
});

const Grocery = mongoose.model("Grocery", grocerySchema);

module.exports = Grocery;
