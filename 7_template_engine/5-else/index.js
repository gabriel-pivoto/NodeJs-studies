const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  const user = {
    name: "Gabriel",
    surname: "Pivoto",
  };

  const approved = false;

  res.render("home", { user: user, auth: true, approved });
});

app.get("/dashboard", function (req, res) {
  
  res.render("dashboard");
});

app.listen(3000);