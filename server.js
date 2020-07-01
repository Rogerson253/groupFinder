const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});