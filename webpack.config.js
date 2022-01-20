const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
      alias: {
          'react-native$': 'react-native-web',
          '@storybook/react-native': '@storybook/react',
        },
  },
}