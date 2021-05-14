module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    [
      "@babel/preset-env",
      {
        loose: true,
        shippedProposals: true,
      },
    ],
    [
      "@babel/preset-react",
      {
        loose: true,
      },
    ],
  ],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
  plugins: [
    ["@babel/plugin-transform-flow-strip-types", {loose: true}],
    ["@babel/plugin-proposal-class-properties", {loose: true}],
    ["@babel/plugin-proposal-private-methods", {loose: true}],
    ["@babel/plugin-proposal-private-property-in-object", {loose: true}],
    ["@babel/plugin-proposal-decorators", {legacy: true}],
  ],
};
