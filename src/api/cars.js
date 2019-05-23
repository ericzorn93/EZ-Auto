const express = require("express");
const router = express.Router();

const fetchMercedes = require("../helpers/functions/fetchMercedes");
const fetchBmw = require("../helpers/functions/fetchBmw");

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
