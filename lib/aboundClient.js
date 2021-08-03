const environments = require("./environments.js");

function AboundClient(config) {
  validateConfig(config);

  this.appId = config.appId;
  this.appSecret = config.appSecret;
  this.environment = config.environment;
  this.apiVersion = config.apiVersion;
}

const REQUIRED_CONFIG_FIELDS = [
  "appId",
  "appSecret",
  "apiVersion",
  "environment",
];

function validateConfig(config) {
  for (const field of REQUIRED_CONFIG_FIELDS) {
    if (!Object.prototype.hasOwnProperty.call(config, field)) {
      throw new Error(`Missing ${field} in Abound config`);
    }
  }

  if (!Object.values(environments).includes(config.environment)) {
    throw new Error(`Invalid Abound environment`);
  }
}

module.exports = AboundClient;
