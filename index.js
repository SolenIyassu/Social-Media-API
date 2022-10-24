const express = require("express");
const db = require("./config/connection");
const { route } = require("./routes");
const routes = require("./routes");

const PORT = process.env.port || 3001;
const app = express();

const socialMedia = cwd.includes("Social-Media-API")
  ? cwd.split("/Social-Media-API")[1]
  : cwd;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API is running on ${PORT}!`);
  });
});
