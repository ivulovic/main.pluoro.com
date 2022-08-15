const { merge } = require('webpack-merge');
const baseDevelopmentConfiguration = require('./base/webpack.dev');
const localCommonConfiguration = require('./webpack.common');

module.exports = merge(baseDevelopmentConfiguration, localCommonConfiguration, {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
      '/data': {
        target: 'https://pluoro.com/',
        changeOrigin: true,
      }
    },
  },
});
