// structuring this way allows for import of 
// var db = require("../../models");
// rather than each individual model
module.exports = {
  Chore: require("./chores"),
  Bill: require("./bills"),
  Grocery: require("./groceries"),
  Event: require("./events"),
  // User: require("./user")
};
