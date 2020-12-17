const path = require("path")
const config = require("./webpack.config")
const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin") // this is preinstalled by webpack to minify js

module.exports = merge(config, {
  mode: "production",
  devtool: "none",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", //2.Turns css into js
          {
            loader: "postcss-loader",
          },
          "sass-loader", // 1. Turns sass into css
        ], //this works in reverse order
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@wordpress/default"],
            plugins: ["babel-plugin-loop-optimizer"],
          },
        },
      },
    ],
  },
})
