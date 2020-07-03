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




// Export routes for server.js to use.
module.exports = router;
