var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data })
    });
})

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne({ eaten: req.body.devoured }, { value: req.body.id }, function (data) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

router.post("/api/burgers", function (req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.burgerName, req.body.devoured], function(result){
        res.json({ id: result.id });
    })
})