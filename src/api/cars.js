const express = require("express");
const router = express.Router();

const fetchMercedes = require("../helpers/functions/fetchMercedes");

router.get("/all-cars", async (req, res) => {
  const mercedes = await fetchMercedes();

  const finalCars = {
    mercedesBenz: mercedes
  };
  return res.json(finalCars);
});

module.exports = router;
