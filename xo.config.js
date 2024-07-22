module.exports = {
  prettier: true,
  envs: ["node", "jest"],
  ignores: ["**/xo.config.js", "**/prettier.config.js"],
  rules: {
    // Shut off "capitalized-comments" since commenting a section of code out
    // causes this error to be reported.
    "capitalized-comments": "off",
    // Shut off "n/file-extension-in-import" since TS curretly has issues
    // handling this.
    "n/file-extension-in-import": "off",
  },
};
