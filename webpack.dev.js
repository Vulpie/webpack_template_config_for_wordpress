const path = require("path")
const config = require("./webpack.config")
const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = merge(config, {
  mode: "development",
  devtool: "none",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new CleanWebpackPlugin()],
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
})
