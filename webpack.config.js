/* eslint-disable no-undef */

const path = require(`path`);
const publicDir = path.join(__dirname, `public`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: publicDir
  },
  devServer: {
    contentBase: publicDir,
    open: false,
    inline: false,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
};
