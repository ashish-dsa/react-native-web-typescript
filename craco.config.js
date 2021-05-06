const {ESLINT_MODES} = require("@craco/craco");

const path = require("path");
const {getLoader, loaderByName} = require("@craco/craco");

module.exports = {
  webpack: {
    alias: {
      "react-native$": require.resolve("react-native-web"),
    },
    plugins: {
      add: [] /* An array of plugins */,
      remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
    },
    configure: (webpackConfig, {env, paths}) => {
      return webpackConfig;
    },
  },
  jest: {
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */,
    },
    configure: {
      /* Any Jest configuration options: https://jestjs.io/docs/en/configuration. */
    },
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: {
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
  },
  eslint: {
    mode: ESLINT_MODES.file,
  },
};
