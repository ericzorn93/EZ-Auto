const routes = (module.exports = require("next-routes")());

routes.add({
  name: "mercedesBenz",
  pattern: "/mercedes-benz",
  page: "mercedes"
});
