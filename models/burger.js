const orm = require("../config/orm");

var burger = {
  all: function(callb){
    orm.selectAll("burgers", "burger_name", (result) => {
      callb(result);
    });
  },
  create: function(name, callb){
  	var vals = {burger_name: name};
    orm.insertOne("burgers", vals, (result) => {
      callb(result);
    });
  },
  update: function(state, callb){
  	var vals = {devoured: state};
    orm.updateOne("burgers", vals, (result) => {
      callb(result);
    });
  }
};

module.exports = burger;