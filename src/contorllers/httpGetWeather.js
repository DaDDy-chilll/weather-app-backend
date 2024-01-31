const axios = require("axios")


const httpGetWeather = async (req,res) => {
    const name= req.params.name;
    const params = new URLSearchParams({
        [process.env.API_KEY_NAME]:process.env.API_KEY_VALUE,
        name
    })
    const url = `${process.env.API}/?${process.env.API_KEY_NAME}=${process.env.API_KEY_VALUE}&q=${name}`
    console.log(url);
  try {
    const response = await axios.get(url);
    console.log('res',response);
    res.status(200).json(response.data)
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = httpGetWeather;