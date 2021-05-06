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
      // your overridden `style-loader`
      const overrideOptions = {
        loader: "babel-loader",
        options: {
          // Disable reading babel configuration
          babelrc: false,
          configFile: false,

          // The configuration for compilation
          presets: [
            ["@babel/preset-env", {useBuiltIns: "usage"}],
            "@babel/preset-react",
            "@babel/preset-flow",
            "@babel/preset-typescript",
          ],
          plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread"],
        },
      };

      // override `style-loader`
      const {isFound, match} = getLoader(webpackConfig, loaderByName("babel-loader"));

      if (isFound) {
        match.parent[match.index] = overrideOptions;
      }

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
