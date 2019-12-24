var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, devoured, cb){
        orm.insertOne("burgers", burgerName, devoured, function(res){
            cb(res)
        });
    },
    updateOne: function(eaten, value, cb){
        orm.updateOne("burgers", eaten, "burger_name", value, function(res){
            cb(res)
        })
    }
}

module.exports = burger;