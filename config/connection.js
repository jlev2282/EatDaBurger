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


// cleardb connection information
// var connection = mysql.createConnection({
//     driver: 'mysql',
//     host: env('DB_HOST', 'us-cdbr-iron-east-05.cleardb.net'),
//     database: env('DB_DATABASE', 'heroku_8fe5ab374301543'),
//     username: env('DB_USERNAME', 'b06b3ab972e2ff'),
//     password: env('DB_PASSWORD', '5efcd0c3'),
//     charset: 'utf8',
//     collation:'utf8_unicode_ci',
//     prefix: '',
//     strict: false,
// });

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