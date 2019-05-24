const express = require("express");
const router = express.Router();

const fetchMercedes = require("../utils/functions/fetchMercedes");
const fetchBmw = require("../utils/functions/fetchBmw");
const fetchLexus = require("../utils/functions/fetchLexus");

/**
 * @description
 * Fetches all interested BMW models and returns the array of the desired models
 */
router.get("/all-cars", async (req, res) => {
  const mercedes = await fetchMercedes();
  const bmw = await fetchBmw();
  const lexus = await fetchLexus();

  const finalCars = {
    mercedesBenz: mercedes,
    bmw,
    lexus
  };
  return res.json(finalCars);
});

module.exports = router;
