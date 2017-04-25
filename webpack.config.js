const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: '/node_modules/',
        test: /\.js$/
      }
    ]
  }
};

