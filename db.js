const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "2.59.118.74",
    user: "esfasoftware_vizz",
    password: "883..Fedai34",
    database: "esfasoftware_vizviz"


});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;
