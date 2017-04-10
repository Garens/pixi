var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'js/[name].bundle.js',
    library: 'Scada',
    libraryTarget: 'umd'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'head'
    })
  ]
};
