"use strict";

exports.index = function(req, res) {
  res.render("index", { title: "Todo List Make with NodeJs" });
};
