const router = require("express").Router();

var db = require("../../models");

router
  .route("/")
  .get(function (req, res) {
    var currentUserGoogleId = getGoogleId(req, res);
    db.Event.find({ googleId: currentUserGoogleId }).then(function (dbEvent) {
      res.json(dbEvent);
    });
  })
  .post(function (req, res) {
    var eventData = req.body;
    eventData.googleId = getGoogleId(req, res);
    db.Event.create(req.body).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

// will grab one Event by id and update based on user input
router
  .route("/:id")
  .put(function (req, res) {
    db.Event.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (
      dbEvent
    ) {
      res.json(dbEvent);
    });
  })
  // will delete a selected Event by id
  .delete(function (req, res) {
    db.Event.findById({ _id: req.params.id })
      .then(function (dbEvent) {
        dbEvent.remove();
      })
      .then(function (dbEvent) {
        res.json(dbEvent);
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
