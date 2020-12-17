const path = require("path");
const config = require("./webpack.config");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: "production",
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
          MiniCssExtractPlugin.loader,
          "css-loader", //2.Turns css into js
          "sass-loader", // 1. Turns sass into css
        ], //this works in reverse order
      },
    ],
  },
});
