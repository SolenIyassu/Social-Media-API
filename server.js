const express = require("express");
const db = require("./config/connection");
const mongodb = require("mongodb").MongodbClient;
const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
