const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();

app.use(express.static('public'));

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

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