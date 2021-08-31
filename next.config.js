// next.config.js
const withAntdLess = require("next-plugin-antd-less");

const primaryColor = "black";

module.exports = withAntdLess({
  // optional
  modifyVars: {
    "@primary-color": primaryColor,
    "@heading-color": primaryColor,
    "@border-radius-base": "5px", // major border radius
    "@border-color-base": "orange", // major border color
    "@box-shadow-base": "orange",
    "@input-hover-border-color": "orange",
    "@input-bg": "yellow",
  },
  // optional
  // lessVarsFilePath: "./src/styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
