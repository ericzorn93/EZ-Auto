require("es6-promise").polyfill();
require("isomorphic-fetch");

/**
 * @description
 * Fetches all interested BMW models and returns the array of the desired models
 */
const fetchBmw = async () => {
  const bmwUrl =
    "https://bmw-inventory-service-prod.azurewebsites.net/api/search";

  try {
    const bmwPostData = JSON.stringify({
      PageSize: 10,
      Start: 0,
      ZipCode: "07675",
      Radius: 50,
      SortOrder: "",
      SortDirection: "",
      Filters: {
        CPOType: ["BMW Certified"],
        Series: ["3 Series"],
        Year: ["2017"],
        Mileage: ["20,000 or less"],
        Price: ["$20,000 - $29,999", "$30,000 - $39,999"]
      }
    });

    const bmwResponse = await fetch(bmwUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: bmwPostData
    });

    const bmwData = await bmwResponse.json();

    return [bmwData];
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchBmw;
