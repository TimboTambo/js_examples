var express = require("express");
var nunjucks = require("nunjucks");

var app = express();
app.use(express.static("/public"));

// app.set("views", __dirname + "\\views");

// Apply nunjucks and add custom filter and function (for example).
var env = nunjucks.configure(__dirname + "\\views", {
  // set folders with templates
  autoescape: true,
  express: app,
});
env.addFilter("myFilter", function (obj, arg1, arg2) {
  console.log("myFilter", obj, arg1, arg2);
  // Do smth with obj
  return obj;
});
env.addGlobal("myFunc", function (obj, arg1) {
  console.log("myFunc", obj, arg1);
  // Do smth with obj
  return obj;
});

app.get("/", function (req, res) {
  res.render("hello world.html", { title: "Hello World!" });
});


app.listen(3000, function () {
  console.log(`Example app listening at http://localhost:3000`);
});

