const path = require('path')

const babelLoaderConfiguration = {
  test: /\.(ts|tsx|m?js)?$/i,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
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