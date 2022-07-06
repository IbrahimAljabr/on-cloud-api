const cors = require("cors");
const express = require("express");
const logger = require("morgan");

const routes = require("./routes/");
const { corsOrigin } = require("./config/config");
const { NotFound } = require("./lib/errors");

const app = express();

app.set("showStackError", true);

app.use(logger("dev"));
app.use(express.json());
app.use(cors({ origin: corsOrigin }));

app.use("/", routes);

app.use("*", () => {
  throw new NotFound();
});

module.exports = app;
