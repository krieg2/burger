const mysql = require("mysql");

// Set up connection information.
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "",
      database: "burgers_db"
    });
}

// Connect to the database.
connection.connect( (error) => {
    if(error){
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("connected to mysql as id " + connection.threadId);
});

// Export connection.
module.exports = connection;
