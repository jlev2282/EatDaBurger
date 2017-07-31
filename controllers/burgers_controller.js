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
    burger.create(["name"], [req.body.name], function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    
})
