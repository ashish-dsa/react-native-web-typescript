const path = require("path");

module.exports = {
  entry: {
    entry: "./index.js",
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
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
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader",
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
    },
    modules: [path.join(__dirname, "./node_modules")],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
