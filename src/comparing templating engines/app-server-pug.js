const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("hello world.pug");
});

app.set("views", __dirname + "/views");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

