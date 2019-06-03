require("dotenv").config();
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const cors = require("cors");
const next = require("next");

const routes = require("./routes/routes");
const primary = require("./src/api/primary");
const cars = require("./src/api/cars");

/**
 * @description
 * Initializes the server
 */
function initServer() {
  const dev = process.env.NODE_ENV !== "production";

  app.engine("handlebars", exphbs());
  app.set("view engine", "handlebars");
  app.use(cors());

  const handler = routes.getRequestHandler(
    app,
    ({ req, res, route, query }) => {
      app.render(req, res, route.page, query);
    }
  );

  const server = express();

  app.prepare().then(() => {
    const server = express();

    if (process.env.NODE_ENV === "production") {
      //server.use( compression() );
    }

    server.use(handler);

    // Routes
    app.use("/", primary);
    app.use(`/${process.env.API_VERSION}`, cars);

    // Server Listening
    const PORT = process.env.PORT || 4000;

    var httpServer = http.createServer(server);
    httpServer.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  });
}

initServer();
