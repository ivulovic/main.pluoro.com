const path = require('path');

const config = {
  resolve: {
    alias: {
      '@reactoso-ui': path.resolve('src/packages/ui'),
      '@reactoso-redux': path.resolve('src/packages/redux'),
      '@reactoso-saga': path.resolve('src/packages/saga'),
      '@reactoso-intl': path.resolve('src/packages/intl'),
      '@reactoso-request': path.resolve('src/packages/request'),

      '@service': path.resolve('src/core/service'),
      '@repository': path.resolve('src/core/repository'),
      '@translations': path.resolve('src/core/translations'),

      '@pages': path.resolve('src/app/pages'),
      '@hooks': path.resolve('src/app/hooks'),
      '@utils': path.resolve('src/app/utils'),
      '@providers': path.resolve('src/app/providers'),
      '@components': path.resolve('src/app/components'),
      '@controllers': path.resolve('src/app/controllers'),
      '@implementation': path.resolve('src/app/implementation'),
    },
    modules: ['node_modules', 'src'],
  },
};

module.exports = config;
