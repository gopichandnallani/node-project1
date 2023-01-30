var express = require("express");
var app = express();
var bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT} `);
});

const schema = require("./service/routers");

app.use("/", schema);

