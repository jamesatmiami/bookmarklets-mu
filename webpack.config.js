var path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
  mode: 'production',
  plugins: [new ESLintPlugin()],
  entry: {
    forms:       "./forms.js",
    headings:    "./headings.js",
    images:      "./images.js",
    interactive: "./interactive.js",
    landmarks:   "./landmarks.js",
    lists:       "./lists.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"]
      },
    ],
  }
};
