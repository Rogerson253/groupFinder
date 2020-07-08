



// Import the model 

const user = require("../models/user.js");
module.exports=(app) => {
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
    });
  });

}