const router = require("express").Router();

var db = require("../models");

// GET route for getting all events
// not sure how to differentiate events from other data
router.route("/api/posts/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
        res.json(dbPost);
    });
});