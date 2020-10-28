// importing modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const fs = require("fs");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient
    // serving static files
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
// connecting to Mongodb
var url = "mongodb://localhost:27017/news";
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db('news');
    dbo.collection('posts').find({}).toArray((err, result) => {
        if (err) throw err;
        db.close();
    })
});
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