const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// want to get from the request the userID of who is making the call
// if you succeed in getting the user, then you get the info
