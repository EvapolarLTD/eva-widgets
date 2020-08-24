/* eslint-disable prefer-template, prefer-destructuring, import/newline-after-import */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const libraryName = 'build';

module.exports = (_, argv) => {
  const env = argv.mode;

  let outputFile;
  let mode;

  if (env === 'production') {
    mode = 'production';
    outputFile = libraryName + '.min.js';
  } else {
    mode = 'development';
    outputFile = libraryName + '.js';
  }

  return {
    mode,
    entry: path.resolve('./packages/lib/index.js'),
    devtool: 'inline-source-map',
    output: {
      path: path.resolve('./lib'),
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: "typeof self !== 'undefined' ? self : this",
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/,
        },
        {
          test: /\.(png|jp(e*)g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.svg/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {},
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve('./node_modules'), path.resolve('./src')],
      extensions: ['.json', '.js', '.jsx'],
    },
    externals: [nodeExternals()],
  };
};
/* eslint-enable prefer-template, prefer-destructuring, import/newline-after-import */
