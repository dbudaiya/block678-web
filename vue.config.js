const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
    ],
    resolve: {
      alias: {
        components: "@/components",
        assets: "@/assets",
        service: "@/service",
      },
    },
  },

  pages: {
    index: {
      // page 的入口
      entry: "./src/main.js",
    },
  },
  devServer: {
    before: require("./src/mock/mian.js"),
    //上诉地址将会返回一个方法
  },
};
