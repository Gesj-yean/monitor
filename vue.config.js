const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  productionSourceMap: false,//打包之后不生成map文件

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "src/assets/style/index.less")]
    }
  },

  configureWebpack: config => {
    config.module.rules.push({
      // 处理markdown文件
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader'
        },
        {
          loader: require.resolve('./src/assets/js/markdownLoader')
        }
      ]
    }
    )
  },
}
