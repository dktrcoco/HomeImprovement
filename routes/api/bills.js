const router = require("express").Router();

var db = require("../models");

// GET route for getting all bills
// not sure how to differentiate bills from other data
router.route("/api/posts/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
        res.json(dbPost);
    });
});