const path = require('path');

module.exports = {
  entry: [ './js/index.ts', './js/main.ts' ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
	filename: 'bundle.[contenthash].js',
	path: path.resolve(__dirname, 'js'),
  },
};