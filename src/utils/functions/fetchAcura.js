require("es6-promise").polyfill();
require("isomorphic-fetch");

/**
 * @description
 * Fetches all interested Audi models and returns the array of the desired models
 */
const fetchAcura = async () => {
  try {
    const acuraResponse = await fetch(process.env.ACURA_FIRST_API);
    const acuraData = await acuraResponse.json();

    // Destructuring Models from API response
    const { Output } = acuraData;
    const {
      Results: {
        Models: { Model: allAcuraModels }
      }
    } = Output;

    // Filtering Response for required years and mileage
    let preferencedModels = [];
    for (let i = 0; i < allAcuraModels.length; i++) {
      const model = allAcuraModels[i];
      const { ModelYear: modelYear, ModelGroupName: modelName } = model;

      if (
        (modelYear === "2017" ||
          modelYear === "2018" ||
          modelYear === "2019") &&
        modelName === "TLX"
      ) {
        preferencedModels.push(model);
      }
    }

    const parsedCars = [];
    for (let i = 0; i < preferencedModels.length; i++) {
      const dealer = preferencedModels[i];
      const dealerVins = dealer.ModelVINsOnSite.VIN;

      for (let j = 0; j < dealerVins.length; j++) {
        const car = dealerVins[j];
        const mileage = car["Mileage"];
        const parsedMileage = parseFloat(mileage);
        const price = car["DSRP"];
        const parsedPrice = parseFloat(price);

        if (parsedMileage <= 15000 && parsedPrice <= 35000) {
          parsedCars.push(car);
        }
      }
    }

    return parsedCars;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchAcura;
