const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseCommonConfiguration = require('./webpack.common');

const baseDevelopmentConfiguration = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: ['./src/index.tsx'],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
};

module.exports = merge(baseCommonConfiguration, baseDevelopmentConfiguration);
