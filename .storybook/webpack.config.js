module.exports = async ({config}) => {
  config.resolve.alias = {
    "react-native$": "react-native-web",
    "@storybook/react-native": "@storybook/react",
  };

  return config;
};
