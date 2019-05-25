const express = require("express");
const router = express.Router();

const { globalApiPrefix } = require("../utils/constants/contants.api");

router.get("/", (req, res) => {
  const greetingMessage = {
    name: "EZ-Auto",
    apiVersion: "1.0.0",
    author: "Eric Zorn",
    message:
      "This API enables the user to find the car of their choice. It aggregates the data from each manufacturer and returns the data as requested.",
    routes: {
      mercedesBenz: `${globalApiPrefix}/mercedesBenz`,
      bmw: `${globalApiPrefix}/bmw`,
      audi: `${globalApiPrefix}/audi`,
      lexus: `${globalApiPrefix}/lexus`
    }
  };

  res.status(200).json(greetingMessage);
});

module.exports = router;
