const outputDir = require('../conf').out,
  path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  },

  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = 'PUTTY账号管理'
        return args
      })
  },

  outputDir: path.join(outputDir, 'dist')
}
