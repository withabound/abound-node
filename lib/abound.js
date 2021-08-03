const environments = require("./environments.js");
const AboundClient = require("./aboundClient.js");

module.exports = {
  Client: AboundClient,
  environments,
};
