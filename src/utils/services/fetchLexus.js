require("es6-promise").polyfill();
require("isomorphic-fetch");

/**
 * @description
 * Fetches all interested Lexus models and returns the array of the desired models
 */
const fetchLexus = async () => {
  try {
    const lexusResponse = await fetch(process.env.LEXUS_FIRST_URL);
    const lexusData = await lexusResponse.json();

    return lexusData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchLexus;
