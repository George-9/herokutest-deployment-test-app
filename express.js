const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const app = express();

app.use(parser.urlencoded({ extended: true , limit: '500mb'}));

app.use(parser.json({limit: '500mb'}));

app.use(cors());
app.use(express.static(__dirname));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = { app }