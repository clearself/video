module.exports = {
  outputDir: '../webrtc-server/static',
  devServer: {
    host: '10.18.3.88', // 自己的ip
    port: 8080, // 端口号
    https: true, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器  http://XXX.XXX.X.XX:7071/rest/XXX/
    hotOnly: true, // 热更新
  }
};
