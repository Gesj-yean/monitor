const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  productionSourceMap: false,//打包之后不生成map文件

}
