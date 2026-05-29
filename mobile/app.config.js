/** @type {import('expo/config').ExpoConfig} */
const appJson = require("./app.json");

// GitHub Pages project site: https://<user>.github.io/<repo>/
const baseUrl = process.env.EXPO_BASE_URL ?? "/Rapture";

module.exports = {
  expo: {
    ...appJson.expo,
    name: "Rapture",
    slug: "rapture",
    experiments: {
      ...appJson.expo.experiments,
      baseUrl,
    },
    web: {
      ...appJson.expo.web,
      bundler: "metro",
      output: "static",
    },
  },
};
