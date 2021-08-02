module.exports = {
  prettier: true,
  envs: ["node", "jest"],
  rules: {
    // Shut off "capitalized-comments" since commenting a section of code out
    // causes this error to be reported.
    "capitalized-comments": "off",
    // Shut off "unicorn/filename-case" since we use specific naming convensions
    // for the type of code we are writing.
    "unicorn/filename-case": "off",
  },
};
