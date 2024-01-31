const express = require("express");
const httpGetWeather = require("../contorllers/httpGetWeather");
const router = express.Router();

router.get("/:name", httpGetWeather);

module.exports = router;
