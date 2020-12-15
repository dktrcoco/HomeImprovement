const router = require("express").Router();

var db = require("../../models");

router
  .route("/")
  .get(function (req, res) {
      var currentUserGoogleId = getGoogleId(req, res);
    db.Grocery.find({ googleId: currentUserGoogleId})
      .then(function (dbGrocery) {
        res.json(dbGrocery);
      })
      .catch((err) => res.status(422).json(err));
  })
  .post(function (req, res) {
      var groceryData = req.body;
      groceryData.googleId = getGoogleId(req, res);
    db.Grocery.create(req.body)
      .then(function (dbGrocery) {
        res.json(dbGrocery);
      })
      .catch((err) => res.status(422).json(err));
  });

// will grab one Grocery by id and update based on user input
router
  .route("/:id")
  .put(function (req, res) {
    db.Grocery.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(function (dbGrocery) {
        res.json(dbGrocery);
      })
      .catch((err) => res.status(422).json(err));
  })
  // will delete a selected Grocery by id
  .delete(function (req, res) {
    db.Grocery.findById({ _id: req.params.id })
      .then(function (dbGrocery) {
        dbGrocery.remove();
      })
      .then(function (dbGrocery) {
        res.json(dbGrocery);
      })
      .catch((err) => res.status(422).json(err));
  });

function getGoogleId(req, res) {
  var currentUserGoogleId = req.cookies.googleId;
  if (typeof currentUserGoogleId === "undefined") {
    res.status(500).json("User not logged in");
  }
  return currentUserGoogleId;
}

module.exports = router;
