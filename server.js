const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

app.get("/api/users/", function (req, res) {
  db.user.findAll({}).then(function (dbUsers) {
    res.json(dbUsers);
  });
});

app.get("/api/users/username/:username", function (req, res) {
  db.user
    .findAll({
      where: {
        username: req.params.username,
      },
    })
    .then(function (dbDefinitions) {
      res.json(dbDefinitions);
    });
});

app.post("/api/newuser", function (req, res) {
  db.user
    .create({
      username: req.body.username,
      password: req.body.password,
    })
    .then(function (dbUsers) {
      // `results` here would be the newly created user
      res.json(dbUsers);
    });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/quiz.html"));
});

// blog route loads blog.html
app.get("/questions", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/questions.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
  });
});
