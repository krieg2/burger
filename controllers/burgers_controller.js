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

router.post("/api/newburger", function(req, res){
  burger.create(req.body.name, function(result){
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res){
  burger.update(req.params.id, 1, function(result){
    res.status(200).end();
  });
});

module.exports = router;
