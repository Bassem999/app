// importing modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
// connecting to Mongodb

// Creating Routes
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));

app.get("/about", (req, res) => res.sendFile(__dirname + "/public/about.html"));

app.get("/contact", (req, res) =>
    res.sendFile(__dirname + "/public/contact.html")
);
app.post("/quotes", (req, res) => {
    console.log(req.body);
});
app.use((req, res, next) =>
    res.status(404).sendFile(__dirname + "/public/404.html")
);

app.listen(process.env.PORT || 8080);