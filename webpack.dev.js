const path = require("path");
const config = require("./webpack.config");
const merge = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2.Turns css into js
          "sass-loader", // 1. Turns sass into css
        ], //this works in reverse order
      },
    ],
  },
});

module.exports = merge(config, {
  mode: "development",
  devtool: "none",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader", //2.Turns css into js
          "sass-loader", // 1. Turns sass into css
        ], //this works in reverse order
      },
    ],
  },
});
