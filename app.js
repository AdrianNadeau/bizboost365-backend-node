const path = require("path");
const fs = require("fs");
const https = require("https");
const express = require("express");
const app = express(); // create express app

// import Router file
var pageRouter = require('./routes/routes');
var user = require("./models/UserModel");

app.use((_, res, next) => {
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  res.header("Cross-Origin-Embedder-Policy", "require-corp");

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.get("/", (req, res) => {
  res.send('api works')
});
app.get("/login", (req, res) => {
  res.send('login page')
});
const PORT = process.env.PORT || 5000;
// Start the server.
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
