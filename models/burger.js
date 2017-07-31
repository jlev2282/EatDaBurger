//Import the ORM to create functions that will intereact with the database
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    }
};
module.exports = burger;