// Import the model
const db = require("../models");

module.exports = (app) => {
// Create all our routes
app.get("/api/users/", function(req, res) {
  db.user.findAll({})
    .then(function(dbUsers) {
      res.json(dbUsers);
    });
});

app.get('/api/users/username/:username', function(req, res) {
  db.user.findAll({
    where: {
      username: req.params.username
    }
  })
    .then(function(dbDefinitions) {
      res.json(dbDefinitions);
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