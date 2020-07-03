const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});