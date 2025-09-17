module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel"],
    plugins: [
      // Required by react-native-worklets (used transitively by expo-router)
      "react-native-worklets/plugin",
      // Keep reanimated plugin last
      "react-native-reanimated/plugin",
    ],
  };
};
