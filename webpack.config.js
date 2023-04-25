const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'swc-loader',
        options: {
          jsc: {
            externalHelpers: true,
          },
        },
      },
    ],
  },
};
