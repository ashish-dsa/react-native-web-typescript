const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "./index.js",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules[/\\](?!react-native-vector-icons)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [["@babel/plugin-proposal-class-properties", {loose: true}]],
          },
        },
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        type: "asset",
      },
    ],
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
      "@storybook/react-native": "@storybook/react",
      "react-native-gesture-handler": "react-native-web",
      screens: path.resolve(__dirname, "src", "screens"),
      components: path.resolve(__dirname, "src", "components"),
      navigation: path.resolve(__dirname, "src", "navigation"),
      services: path.resolve(__dirname, "src", "services"),
      utils: path.resolve(__dirname, "src", "utils"),
      assets: path.resolve(__dirname, "src", "assets"),
    },
    modules: [path.join(__dirname, "./node_modules")],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{from: "static"}],
    }),
  ],
};
