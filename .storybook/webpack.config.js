const path = require("path");

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    loader: "babel-loader",
    include: path.resolve(__dirname, "../node_modules/"),
    options: {
      // Disable reading babel configuration
      babelrc: false,
      configFile: false,
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-flow",
        "@babel/preset-typescript",
        "module:metro-react-native-babel-preset",
        {
          plugins: [
            "react-native-web",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread",
          ],
        },
      ],
    },
  });

  config.module.rules.push({
    test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
    loader: "file-loader",
  });

  config.module.rules.push({
    test: /\.ttf$/,
    loader: "url-loader",
    include: path.resolve(__dirname, "../node_modules/react-native-vector-icons/dist"),
  });

  config.resolve.alias = {
    "react-native": "react-native-web",
    "@storybook/react-native": "@storybook/react",
  };
  return config;
};
