// Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// local database url
// 27017 is the default mongoDB port
const uri = "mongodb://localhost:27017/reactreadinglist";

mongoose.connection(uri).then(
  () => {
    // ready to use, the 'mongoose.connect()' promise resolves to undefined.
    console.log("Connected to Mongo");

  },
  (err) => {
    // handle initial connection error
    console.log("error connecting to Mongo: ");
    console.log(err);

  }
);

module.exports = mongoose.connection