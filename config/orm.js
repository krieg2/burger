const connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function(table, orderBy, callb){
        var queryString = "SELECT * FROM ?? ORDER BY ?? ASC";
        connection.query(queryString,
                        [table, orderBy],
                        (error, result) => {
             if(error){
                console.log(error);
             } else{
                callb(result);
            }
        });
    },
    insertOne: function(table, setObj, callb){
        var queryString = "INSERT INTO ?? SET ??";
        connection.query(queryString,
                        [table, setObj],
                        (error, result) => {
            if(error){
                console.log(error);
             } else{
                callb(result);
            }
        });
    },
    updateOne: function(table, setObj, callb){
        var queryString = "UPDATE ?? SET ??";
        connection.query(queryString,
                        [table, setObj],
                        (error, result) => {
            if(error){
                console.log(error);
             } else{
                callb(result);
            }
        });
    }
};

module.exports = orm;