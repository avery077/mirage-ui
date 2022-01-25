const path = require('path')

const babelLoaderConfiguration = {
  test: /\.(ts|tsx|m?js)?$/i,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-react',
        ],
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
      ]
    },
  }
};

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      babelLoaderConfiguration,
    ],
  },
  resolve: {
      alias: {
        'react-native$': 'react-native-web',
        '@storybook/react-native': '@storybook/react',
      },
      extensions: ['.web.js', '.js']
  },
}