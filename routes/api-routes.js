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


app.post("/api/newuser", function(req, res) {

    db.user.create({
      username: req.body.username,
      password: req.body.password,
    }).then(function(dbUsers) {
      // `results` here would be the newly created user
      res.json(dbUsers);
    });
  });

}