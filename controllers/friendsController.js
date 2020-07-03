var express = require("express");

var router = express.Router();




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
