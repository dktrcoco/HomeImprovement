const router = require("express").Router();

var db = require("../models");

// GET route for getting all chores
// not sure how to differentiate chores from other data
router.route("/api/posts/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
        res.json(dbPost);
    });
});