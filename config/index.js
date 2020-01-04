"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");

module.exports = {
  build: {
    env: {
      NODE_ENV: "production"
    },
    // Template for index.html
    index: path.resolve(__dirname, "../mm/index.html"),
    // Paths
    assetsRoot: path.resolve(__dirname, "../mm"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/mm/",

    /**
     * Source Maps  源代码缓存
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    // devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"]

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: {
      NODE_ENV: "development"
    },
    port: 9999,
    // index: path.resolve(__dirname, "../mm/index.html"),
    // assetsRoot: path.resolve(__dirname, "../mm"),
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    //借鉴别人的服务器
    proxypath: "http://cangdu.org:8001",
    context: [
      //代理路径
      "/shopping",
      "/ugc",
      "/v1",
      "/v2",
      "/v3",
      "/v4",
      "/bos",
      "/member",
      "/promotion",
      "/eus",
      "/payapi",
      "/img"
    ],
    proxyTable: {},
    // Various Dev Server settings
    host: "localhost", // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    // useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    // showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    // devtool: "cheap-module-eval-source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    // cacheBusting: true,

    cssSourceMap: true
  }
};
