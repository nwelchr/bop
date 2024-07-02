var path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "frontend"),
  entry: "./bop.jsx",
  output: {
    path: path.resolve(__dirname, "..", "app", "assets", "javascripts"),
    filename: "bundle.js",
    chunkFilename: "[name].[contenthash].bundle.js",
    publicPath: "/assets/",
    sourceMapFilename: "[file].map",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};
