const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const baseCommonConfiguration = require('./webpack.common');

const baseProductionConfiguration = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
};

module.exports = merge(baseCommonConfiguration, baseProductionConfiguration);
