const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './client/index.js',
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

// module.exports = {
//   module: {
//     loaders: [
//       {exclude: ['node_modules'], loader: 'babel', test: /\\.jsx?$/},
//       {loader: 'style-loader!css-loader', test: /\\.css$/},
//       {loader: 'url-loader', test: /\\.gif$/},
//       {loader: 'file-loader', test: /\\.(ttf|eot|svg)$/},
//     ],
//   },
//   resolve: {
//     alias: {
//       config$: './configs/app-config.js',
//       react: './vendor/react-master',
//     },
//     extensions: ['', 'js', 'jsx'],
//     modulesDirectories: ['node_modules', 'bower_components', 'shared'],
//     root: '/shared/vendor/modules',
//   },
// };
