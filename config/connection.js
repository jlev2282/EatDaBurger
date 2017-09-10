// Set up MySQL connection.
var mysql = require("mysql");

// local connection information
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "localhost",
//   database: "burgers_db"
// });

// jaws db connection information
// var connection = mysql.createConnection(process.env.JAWSDB_URL);

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "localhost",
  database: "burgers_db"
})|| mysql.createConnection(process.env.JAWSDB_URL);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;