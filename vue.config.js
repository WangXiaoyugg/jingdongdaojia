/**
 * 发布流程
 * 1. 打包前端代码, npm run build
 * 2. 把打包后代码给后端，
 * 3. 后端把前端代码放入后端工程
 * 4. 后端重启后端服务
 * 5. 注意配置静态资源的publicPath
 */
module.exports = {
  publicPath: './'
}
