const zopfli = require("@gfx/zopfli");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  outputDir: "docs"
};

module.exports = {
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        compressionOptions: {
          numiterations: 15
        },
        algorithm(input, compressionOptions, callback) {
          return zopfli.gzip(input, compressionOptions, callback);
        }
      }),
      new CompressionPlugin({
        filename: "[path].br[query]",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      })
    ]
  },
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === "production" ? "/code-review/" : "/"
};
