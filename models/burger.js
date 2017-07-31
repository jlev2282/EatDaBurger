//Import the ORM to create functions that will intereact with the database
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insert: function(col, vals, cb) {
        orm.insertOne("burgers", col, vals, function(res) {
            cb(res)
        });
    },

    update: function(objColvals, condition, cb) {
        orm.updateOne("burgers", objColvals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }

};

//Export the database functions for the controller
module.exports = burger;