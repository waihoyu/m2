//客户端开发环境配置

let path = require("path");
let config = require("../config");
let ExractTextPlugin = require("extract-text-webpack-plugin");

//资源路径
exports.assetsPath = function(_path) {
  let assetsSubDirectory =
    process.env.NODE_ENV === "production"
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

//
exports.cssloader = function(options) {
  options = options || {};
  function generateLoaders(loaders) {
    let sourceLoader = loaders
      .map(function(loader) {
        let extraParamChar;
        if (/\?/.test(loader)) {
          loader = loader.replace(/\?/, "-loader");
          extraParamChar = "&";
        } else {
          loader = loader + "-loader";
          extraParamChar = "?";
        }
        return loader + (options.sourceMap ? extraParamChar + "sourceMap" : "");
      })
      .join("!");
    if (options.extract) {
      return ExtractTextPlugin.extract("vue-stylus-loader", sourceLoader);
    } else {
      return ["vue-style-loader", sourceLoader].join("!");
    }
  }
  return {
    css: generateLoaders(["css"])
  };
};
