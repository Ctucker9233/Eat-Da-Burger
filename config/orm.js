// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb){
        connection.query("select * from ??", [tableName], function(err, result){
            if (err) throw err
            cb(result)
        });
    },
    insertOne: function(tableName, burgerName, devoured, cb){
        connection.query("insert into ?? (burger_name, devoured) values(??, ??)", [tableName, burgerName, devoured], function(err, result){
            if (err) throw err
            cb(result)
        });
    },
    updateOne: function(tableName, eaten, tableCol, value, cb){
        connection.query("update ?? set devoured = ?? where ?? = ?", [tableName, newBurger, eaten, tableCol, value], function(err, result){
            if (err) throw err
            cb(result)
        });
    }
};

module.exports = orm;