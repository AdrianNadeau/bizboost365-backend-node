const path = require("path");
const fs = require("fs");
const https = require("https");
const express = require("express");
const mongoose = require("mongoose")
const app = express(); // create express app
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env"});

// import Router file
var pageRouter = require('./routes/routes');
var user = require("./models/UserModel");
// serve the api
app.get("/", (req, res) => {
  res.send('Backend is working')
});
app.use((_, res, next) => {
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  res.header("Cross-Origin-Embedder-Policy", "require-corp");

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});
// import Router file
var pageRouter = require('./routes/routes');
var user = require("./models/UserModel");
app.get("/", (req, res) => {
  res.send('api works')
});

/* ---------for database connection---------- */
const DB = process.env.DATABASE_URL;
mongoose.connect(DB, {
}).then((con) => console.log("DB connection successfully..!"));
const PORT = process.env.PORT || 5000;
// Start the server.
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
