const express = require("express");
const router = express.Router();

const fetchMercedes = require("../utils/functions/fetchMercedes");
const fetchBmw = require("../utils/functions/fetchBmw");
const fetchLexus = require("../utils/functions/fetchLexus");
const fetchAudi = require("../utils/functions/fetchAudi");

/**
 * @description
 * Fetches all interested BMW models and returns the array of the desired models
 */
router.get("/all-cars", async (req, res) => {
  const mercedes = await fetchMercedes();
  const bmw = await fetchBmw();
  const lexus = await fetchLexus();
  const audi = await fetchAudi();

  const finalCars = {
    mercedesBenz: mercedes,
    bmw,
    lexus,
    audi
  };
  return res.json(finalCars);
});

/**
 * @returns
 * ONLY Mercedes Benz Vehichles
 */
router.get("/mercedezBenz", async (req, res) => {
  const mercedesBenz = await fetchMercedes();

  return res.status(200).json({ ...mercedesBenz });
});

/**
 * @returns
 * ONLY BMW Vehichles
 */
router.get("/bmw", async (req, res) => {
  const bmw = await fetchBmw();

  return res.status(200).json({ ...bmw });
});

/**
 * @returns
 * ONLY Lexus Vehichles
 */
router.get("/lexus", async (req, res) => {
  const lexus = await fetchLexus();

  return res.status(200).json({ ...lexus });
});

/**
 * @returns
 * ONLY Audi Vehichles
 */
router.get("/audi", async (req, res) => {
  const audi = await fetchAudi();

  return res.status(200).json({ ...audi });
});

module.exports = router;
