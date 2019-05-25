require("dotenv").config();
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const cors = require("cors");

const primary = require("./src/api/primary");
const cars = require("./src/api/cars");

/**
 * @description
 * Initializes the server
 */
function initServer() {
  app.engine("handlebars", exphbs());
  app.set("view engine", "handlebars");
  app.use(cors());

  // Routes
  app.use("/", primary);
  app.use(`/${process.env.API_VERSION}`, cars);

  // Server Listening
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}

initServer();
