const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?|tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              fix: true,
              quiet: true,
              configFile: path.resolve(__dirname, '../.eslintrc.js'),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'main': path.resolve(__dirname, '../src/main'),
      'renderer': path.resolve(__dirname, '../src/renderer'),
      'common': path.resolve(__dirname, '../src/common'),
      'static': path.resolve(__dirname, '../src/static'),
    },
  },
}
