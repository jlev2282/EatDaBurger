// Import MySQL connection.
var connection = require("../connection.js");

//Object Related Mapper(ORM)

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += cols.tostring();
        queryString += ") ";
        queryString += "VALUES (";
        queryString +=
    },

    updateOne: function 
}

module.exports = orm;