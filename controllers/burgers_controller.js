var express = require("express");

var router = express.Router();

//Import the model(burger.js) to use its database functions
var burger = require("../models/burger.js");

//Create all our routes and setup logic within the routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        var allBurger = {
            burgers: data
        };
        console.log(allBurger);
        res.render("index", allBurger);
    });
});

router.post("/", function(req, res) {
    burger.insert(["burger_name"], [req.body.burgnam], function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    var condition = "id = "+ req.params.id;

    burger.delete(condition, function() {
        res.redirect("/");
    });
});

//Export routes for server.js to use
module.exports= router;
