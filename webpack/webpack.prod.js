const { merge } = require('webpack-merge');
const baseProductionConfiguration = require('./base/webpack.prod');
const localCommonConfiguration = require('./webpack.common');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(baseProductionConfiguration, localCommonConfiguration, {
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        reactDom: {
          reuseExistingChunk: false,
          enforce: true,
          test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
          name: 'npm.react-dom',
        },
        react: {
          reuseExistingChunk: false,
          enforce: true,
          test: /[\\/]node_modules[\\/](react)[\\/]/,
          name: 'npm.react',
        },
        'reactoso-ui': {
          reuseExistingChunk: false,
          enforce: true,
          test: /[\\/]packages[\\/]ui[\\/]/,
          name: 'reactoso-ui',
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  plugins:[
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    }),
  ]
});
