const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'frontend'),
  entry: {
    main: './bop.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash].bundle.js',
    publicPath: '/assets/',
    sourceMapFilename: '[file].map',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
