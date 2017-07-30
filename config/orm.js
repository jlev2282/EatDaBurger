// Import MySQL connection.
var connection = require("../config/connection.js");

//Object Related Mapper(ORM)

var orm = {
    selectAll: function(){
        var queryString=;
        connection.query(queryString,BLANK,function(err, result){
            console.log(result);
        });
    },
    insertOne: function(){
        var queryString=;
        connection.query(queryString,BLANK,function(err, result){
            console.log(result);
        });
    },
    updateOne: function(){
        var queryString=;
        connection.query(queryString,BLANK,function(err, result){
            console.log(result);
        });
    }
};

module.exports = orm;