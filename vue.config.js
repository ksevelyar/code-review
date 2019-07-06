const BrotliPlugin = require("brotli-webpack-plugin");
const BrotliExtensions = ["js", "css"];

module.exports = {
  outputDir: "docs"
};

module.exports = {
  configureWebpack: {
    plugins: [
      new BrotliPlugin({
        asset: "[path].br[query]",
        test: new RegExp("\\.(" + BrotliExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.7
      })
    ]
  },
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === "production" ? "/code-review/" : "/"
};
