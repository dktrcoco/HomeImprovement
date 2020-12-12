const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// if i wanted to check for duplicates it will have to be
// a mixture of front and back end
// front end might be easier to implement
const choreSchema = new Schema({
	title: { type: String, required: true },
	name: { type: String, required: true },
	start: { type: Date, default: Date.now },
	end: Date,
	allDay: { type: Boolean, default: true },
	resource: String,
	userID: { type: String, required: true}
});

const Chore = mongoose.model("Chore", choreSchema);

module.exports = Chore;
