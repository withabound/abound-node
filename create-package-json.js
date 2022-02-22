const fs = require("fs");
const path = require("path");
const { version } = require("./package.json");

const [filepath, type] = process.argv.slice(2);

fs.writeFileSync(
  path.join(__dirname, filepath),
  JSON.stringify({ version, type }, undefined, 2)
);
