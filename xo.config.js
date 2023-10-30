module.exports = {
  prettier: true,
  envs: ["node", "jest"],
  ignores: [
    "**/xo.config.js",
    "**/prettier.config.js",
    // "**/babel.config.js",
    // "**/jest.config.js",
    // "**/vite.config.js",
    // "**/tsconfig.json",
    // "**/jest.setup.ts",
  ],
  rules: {
    // Shut off "capitalized-comments" since commenting a section of code out
    // causes this error to be reported.
    "capitalized-comments": "off",
  },
};
