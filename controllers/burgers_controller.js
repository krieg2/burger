const express = require("express");
const router = express.Router();

// Import the model.
var burger = require("../models/burger.js");

router.get("/", function(req, res){
  burger.all(function(result){
    var resultObject = {
      burgers: result
    };
    //console.log(resultObject);
    res.render("index", resultObject);
  });
});

router.post("/api/burger", function(req, res){
  burger.create(req.body.name, function(result){
    res.json({ id: result.insertId });
  });
});

module.exports = router;
