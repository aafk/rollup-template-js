const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const pkg = require("./package.json");

module.exports = [
  // {
  //   input: "src/index.js",
  //   output: {
  //     name: pkg.name,
  //     file: pkg.browser,
  //     format: "umd",
  //   },
  //   plugins: [resolve(), commonjs()],
  // },
  // {
  //   input: "src/index.js",
  //   external: ["ms"],
  //   output: [
  //     { file: pkg.main, format: "cjs" },
  //     { file: pkg.module, format: "es" },
  //   ],
  // },
  {
    input: "src/index.js",
    external: ["ms"],
    output: [{ file: pkg.module, format: "es" }],
  },
];
