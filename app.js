const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ extended: false }));

// Routers
app.use(userRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.gxjlxqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
