var webpack = require('webpack'),
    path = require('path')
 
var libraryName = 'typescript-library-template',
    plugins = [],
    outputFile;

plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
outputFile = 'index.min.js';

module.exports = {
  entry: [
    __dirname + '/src/Index'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    sourceMapFilename: "[file].map"
  },
  module: {
    rules: [
        {
            test: /\.ts(x?)$/, 
            loader: 'tslint-loader', 
            exclude: /node_modules/
        },
        {
            test: /\.ts(x?)$/, 
            loader: 'ts-loader',
            exclude: /node_modules/
        }
    ]
  },
  resolve: {
      extensions: ['.js', '.ts']
  },
  plugins: plugins
};