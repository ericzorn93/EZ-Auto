const express = require("express");
const router = express.Router();
require("es6-promise").polyfill();
require("isomorphic-fetch");

router.get("/all-cars", async (req, res) => {
  const mercedes = await fetchMercedes();

  const finalCars = {
    mercedesBenz: mercedes
  };
  return res.json(finalCars);
});

/** HELPER FUNCTIONS */
const fetchMercedes = async () => {
  const c300W4FirstUrl =
    "https://www.mbusa.com/mercedes/json/cpo/inventory/vehicles/search?model=C300W4&count=4&start=0&sortBy=distance&zip=07675&distance=50&minYear=2016&maxYear=2018&minPrice=3000&maxPrice=35000&minMileage=0&maxMileage=12000&callSeq=5&_=1558577407901";

  const cla250FirstUrl =
    "https://www.mbusa.com/mercedes/json/cpo/inventory/vehicles/search?model=CLA250C4&count=4&start=0&sortBy=distance&zip=07675&distance=50&minYear=2016&maxYear=2018&minPrice=3000&maxPrice=35000&minMileage=0&maxMileage=12000&callSeq=5&_=1558577407900";

  try {
    // First Data
    const c300FirstResponse = await fetch(c300W4FirstUrl);
    const cla250FirstResponse = await fetch(cla250FirstUrl);

    const c300FirstData = await c300FirstResponse.json();
    const cla250FirstData = await cla250FirstResponse.json();

    const c300FirstRecords = c300FirstData.models.filter(
      data => data.vehicles.records
    );
    const cla250FirstRecords = cla250FirstData.models.filter(
      data => data.vehicles.records
    );

    // Second Data
    const c300SecondUrl =
      "https://www.mbusa.com/mercedes/json/cpo/inventory/vehicles/search?model=C300W4&count=4&start=0&sortBy=distance&zip=07675&distance=10&minYear=2016&maxYear=2018&minPrice=3000&maxPrice=35000&minMileage=0&maxMileage=12000&callSeq=4&_=1558577407898";
    const cla250SecondUrl =
      "https://www.mbusa.com/mercedes/json/cpo/inventory/vehicles/search?model=CLA250C4&count=4&start=0&sortBy=distance&zip=07675&distance=10&minYear=2016&maxYear=2018&minPrice=3000&maxPrice=35000&minMileage=0&maxMileage=12000&callSeq=4&_=1558577407897";

    const c300SecondResponse = await fetch(c300SecondUrl);
    const cla250SecondResponse = await fetch(cla250SecondUrl);

    const c300SecondData = await c300SecondResponse.json();
    const cla250SecondData = await cla250SecondResponse.json();

    const c300SecondRecords = c300SecondData.models.filter(
      data => data.vehicles.records
    );
    const cla250SecondRecords = cla250SecondData.models.filter(
      data => data.vehicles.records
    );

    return [
      c300FirstRecords,
      cla250FirstRecords,
      c300SecondRecords,
      cla250SecondRecords
    ];
  } catch (error) {
    console.log(error);
  }
};

module.exports = router;
