var express = require("express");

var router = express.Router();

// Import the model 

var user = require("../models/user.js");

// Create all our routes
app.get("/", function(req, res) {
  user.all(function(data) {
    var userData = {
      user: data
    };
    console.log(userData);
    res.render("index", userData);
  });
});

app.post("/api/new", function(req, res) {

    console.log("User Data:");
    console.log(req.body);

    User.create({
      username: req.body.username,
      password: req.body.password,
    }).then(function(results) {
      // `results` here would be the newly created user
      res.end();
    })});


// Export routes for server.js to use.
module.exports = router;
