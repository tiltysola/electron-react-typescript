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
              configFile: path.resolve(__dirname, '.eslintrc.js'),
            },
          },
        ],
      },
    ],
  },
}
