require("es6-promise").polyfill();
require("isomorphic-fetch");

/**
 * @description
 * Fetches all interested Audi models and returns the array of the desired models
 */
const fetchAudi = async () => {
  try {
    const audiResponse = await fetch(process.env.AUDI_FIRST_URL);
    const audiData = await audiResponse.json();

    return audiData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchAudi;
