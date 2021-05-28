const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "puzha.ui.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: `[name].html`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/",
          to: "./",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "puzha.ui.css",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, `src`),
    port: 3000,
    open: true,
  },
};
