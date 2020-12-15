const router = require("express").Router();

var db = require("../../models");

router
  .route("/")
  .get(function (req, res) {
    var currentUserGoogleId = getGoogleId(req, res);
    db.Chore.find({ googleId: currentUserGoogleId }).then(function (dbChore) {
      res.json(dbChore);
    });
  })
  .post(function (req, res) {
    var choreData = req.body;
    choreData.googleId = getGoogleId(req, res);
    db.Chore.create(req.body).then(function (dbChore) {
      res.json(dbChore);
    });
  });

// will grab one chore by id and update based on user input
router
  .route("/:id")
  .put(function (req, res) {
    db.Chore.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (
      dbChore
    ) {
      res.json(dbChore);
    });
  })
  // will delete a selected chore by id
  .delete(function (req, res) {
    db.Chore.findById({ _id: req.params.id })
      .then(function (dbChore) {
        dbChore.remove();
      })
      .then(function (dbChore) {
        res.json(dbChore);
      });
  });

function getGoogleId(req, res) {
  var currentUserGoogleId = req.cookies.googleId;
  if (typeof currentUserGoogleId === "undefined") {
    res.status(500).json("User not logged in");
  }
  return currentUserGoogleId;
}

module.exports = router;
