const { NotFound } = require("../errors/error");

const JsonToData = (json, name) => {
  if (!json) {
    throw new NotFound("Json data not found");
  } else {
    const { weather, main, wind, cloud } = json;

    const data = { name, ...weather[0], ...main, ...wind, ...cloud };
    return data;
  }
};

module.exports = JsonToData;
