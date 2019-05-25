// Determines if the application is in development from the Node Environment
const isDevelopment = process.env.NODE_ENV !== "production";
exports.isDevelopment = isDevelopment;

function generatePrefix() {
  let apiPrefix;
  if (isDevelopment) {
    apiPrefix = `${process.env.DEV_API_PREFIX}/${process.env.API_VERSION}`;
  } else {
    apiPrefix = `${process.env.PROD_API_PREFIX}/${process.env.API_VERSION}`;
  }
  return apiPrefix;
}

// Generates the API prefix URL
const globalApiPrefix = generatePrefix();
exports.globalApiPrefix = globalApiPrefix;
