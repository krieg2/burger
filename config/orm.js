const connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function(table, orderBy){
        var queryString = "SELECT * FROM ?? ORDER BY ?? ASC";
        connection.query(queryString,
                        [table, orderBy],
                        (err, result) => {
            console.log(result);
        });
    },
    insertOne: function(table, setObj){
        var queryString = "INSERT INTO ?? SET ??";
        connection.query(queryString,
                        [table, setObj],
                        (err, result) => {
            console.log(result);
        });
    },
    updateOne: function(table, setObj){
        var queryString = "UPDATE ?? SET ??";
        connection.query(queryString,
                        [table, setObj],
                        (err, result) => {
            console.log(result);
        });
    }

};

module.exports = orm;