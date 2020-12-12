const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
	title: { type: String, required: true },
	value: { type: Number, required: true },
	start: { type: Date, default: Date.now },
	end: Date,
	allDay: { type: Boolean, default: true },
	resource: String,
	googleId: { type: String, required: true}
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;

// want to get from the request the userID of who is making the call
// if you succeed in getting the user, then you get the info
