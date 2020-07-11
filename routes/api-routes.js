// Import the model
const db = require("../models");

module.exports = (app) => {
// Create all our routes
app.get("/api/users/", function(req, res) {
  console.log(db);
  db.user.findAll({})
    .then(function(dbUsers) {
      res.json(dbUsers);
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