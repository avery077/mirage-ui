const custom = require('../webpack.config.js');

module.exports = {
  "stories": ["../src/components/**/*.stories.[tj]s"],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: { 
        ...config.resolve, 
        ...custom.resolve, 
        alias: { 
          ...config.resolve.alias, 
          ...custom.resolve.alias
        }
      },
      module: { 
        ...config.module, 
        rules: [
          ...custom.module.rules,
          ...config.module.rules,
        ]
      },
    }
  },
};