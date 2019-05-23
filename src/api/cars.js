const express = require("express");
const router = express.Router();

const fetchMercedes = require("../utils/functions/fetchMercedes");
const fetchBmw = require("../utils/functions/fetchBmw");

/**
 * @description
 * Fetches all interested BMW models and returns the array of the desired models
 */
router.get("/all-cars", async (req, res) => {
  const mercedes = await fetchMercedes();
  const bmw = await fetchBmw();

  const finalCars = {
    mercedesBenz: mercedes,
    bmw
  };
  return res.json(finalCars);
});

module.exports = router;
