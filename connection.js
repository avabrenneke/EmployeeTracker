
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 2021,
    user: "root",
    password: "Jtm9mv5398!",
    database: "employee_tracker"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection