module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@features": "./src/features",
          "@navigation": "./src/navigation",
          "@api": "./src/api",
          "@store": "./src/store",
          "@types": "./src/types",
          "@shared": "./src/shared",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
