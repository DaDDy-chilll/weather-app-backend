const axios = require("axios");
const { NotFound, BadRequest } = require("../errors/error");
const { StatusCodes } = require("http-status-codes");
const JsonToData = require("../utils/jsonFunc");

const httpGetWeather = async (req, res) => {
  const name = req.params.name;
  if (!name) throw new NotFound("Not Found city name");
  const url = `${process.env.API}/?${process.env.API_KEY_NAME}=${process.env.API_KEY_VALUE}&q=${name}&units=metric`;
  try {
    const response = await axios.get(url);
    const data = JsonToData(response.data, name);
    res.status(StatusCodes.OK).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
};

module.exports = httpGetWeather;
