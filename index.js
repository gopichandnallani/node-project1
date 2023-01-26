var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var db = require("../Node-project-1/db/db")

app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT} `);
});

const schema = require("./service/routers");

app.use("/url", schema);

