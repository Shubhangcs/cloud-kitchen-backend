const express = require("express");
const cors = require("cors");
const foodRouters = require("./router/routers");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/food", foodRouters);

module.exports = app;
