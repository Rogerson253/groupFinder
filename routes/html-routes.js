var path = require("path");

module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/quiz.html"));
  });

  // cms route loads cms.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // blog route loads blog.html
  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/questions.html"));
  });

  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });
};