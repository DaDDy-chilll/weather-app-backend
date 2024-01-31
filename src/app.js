require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require('cors')
const helmet = require("helmet");
const reateLimit = require("express-rate-limit");
const apicach = require("apicache");
const { StatusCodes } = require("http-status-codes");
const app = express();
const cach = apicach.middleware;
const limit = reateLimit({
  window: 5 * 60 * 1000,
  max: 10,
});

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(cors({methods:'GET'}))
app.use(limit);
app.use(helmet());
app.set("trust proxy", 1);
app.use("/api", cach("5 minutes"), router);
app.get("*", (req, res) =>
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ message: "Home Route is doesn't defined." })
);
module.exports = app;
