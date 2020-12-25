//与公共配置进行合并

module.exports={
  configureWebpack: {
    resolve:{
      alias:{
        //默认 @ => src
        'assets':'@/assets',
        'components':'@/components',
        'common':'@/common',
        'network':'@/network',
        'router':'@/router',
        'views':'@/views'
      }
    }
  }
}