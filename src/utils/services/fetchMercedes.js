require("es6-promise").polyfill();
require("isomorphic-fetch");

/**
 * @description
 * Fetches and returns all Mercedes Benz Cars
 *
 */
const fetchMercedes = async () => {
  const c300W4FirstUrl = process.env.C300W4_FIRST_URL;

  const cla250FirstUrl = process.env.CLA250_FIRST_URL;

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
    const c300SecondUrl = process.env.C300W4_SECOND_URL;
    const cla250SecondUrl = process.env.CLA250_SECOND_URL;

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

module.exports = fetchMercedes;
