// Import MySQL connection.
var connection = require("../config/connection.js");

//Object Related Mapper(ORM)

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
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
        queryString += vals;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        })
    }
}

module.exports = orm;