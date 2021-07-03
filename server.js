const express = require("express");
const exhbs = require("express-handlebars");
const path = require("path");
const app = express();

app.engine("handlebars", exhbs({
    defaultLayout: "main",
    layoutsDir: "views/layouts"
}));

app.set("view engine", "handlebars");

app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
    res.render("products",{
        nombre: "Monica"
    });
});

app.listen(3000, function () {
    console.log("iniciando server en puerto... 3000");
});