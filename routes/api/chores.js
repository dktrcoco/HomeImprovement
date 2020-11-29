const router = require("express").Router();

var db = require("../../models");

// GET route for getting all chores
// not sure how to differentiate chores from other data
// don't needs controller if have access to db directly here
router.route("/")
    .get(function (req, res) {
        db.Chore.find({})
            .then(function (dbChore) {
                res.json(dbChore);
            })
    })
    .post(function (req, res) {
        db.Chore.create(req.body)
            .then(function (dbChore) {
                res.json(dbChore)
            });
    });

// will grab one chore by id and update based on user input
router.route("/:id")
    .put(function (req, res) {
        db.Chore.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(function (dbChore) {
                res.json(dbChore)
            })
    })
    // will delete a selected chore by id
    .delete(function (req, res) {
        db.Chore.findById({ _id: req.params.id })
            .then(function (dbChore) {
                dbChore.remove()
            })
            .then(function (dbChore) {
                res.json(dbChore)
            });
    });

module.exports = router;