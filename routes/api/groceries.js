const router = require("express").Router();

var db = require("../../models");

// GET route for getting all chores
// don't needs controller if have access to db directly here
router.route("/")
    .get(function (req, res) {
        db.Grocery.find({})
            .then(function (dbGrocery) {
                res.json(dbGrocery);
            })
            .catch(err => res.status(422).json(err));
    })
    .post(function (req, res) {
        db.Grocery.create(req.body)
            .then(function (dbGrocery) {
                res.json(dbGrocery)
            })
            .catch(err => res.status(422).json(err));
    });

// will grab one Grocery by id and update based on user input
router.route("/:id")
    .put(function (req, res) {
        db.Grocery.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(function (dbGrocery) {
                res.json(dbGrocery)
            })
            .catch(err => res.status(422).json(err));
    })
    // will delete a selected Grocery by id
    .delete(function (req, res) {
        db.Grocery.findById({ _id: req.params.id })
            .then(function (dbGrocery) {
                dbGrocery.remove()
            })
            .then(function (dbGrocery) {
                res.json(dbGrocery)
            })
            .catch(err => res.status(422).json(err));
    });



// router.route("/")
//     .get(function (req, res) {
//         db.Grocery.create(req.body)
//             .then(function (dbGrocery) {
//                 res.json(dbGrocery)
//             });
//     });

// // will grab one chore by id and update based on user input
// router.route("/:id")
//     .put(function (req, res) {
//         db.Grocery.findOneAndUpdate({ _id: req.params.id }, req.body)
//             .then(function (dbGrocery) {
//                 res.json(dbGrocery)
//             })
//     })
//     // will delete a selected chore by id
//     .delete(function (req, res) {
//         db.Grocery.findById({ _id: req.params.id })
//             .then(function (dbGrocery) {
//                 dbGrocery.remove()
//             })
//             .then(function (dbGrocery) {
//                 res.json(dbGrocery)
//             });
//     });

module.exports = router;    