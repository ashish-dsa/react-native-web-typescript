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
    "@babel/preset-react",
  ],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
  plugins: [["@babel/plugin-proposal-class-properties", {loose: true}]],
};
