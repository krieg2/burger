const mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Connect to the database
connection.connect( (error) => {
    if(error){
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("connected to mysql as id " + connection.threadId);
});

// Export connection
module.exports = connection;