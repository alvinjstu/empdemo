const withVue2 = require('@efox/emp-vue2')
const path = require('path')
const ProjectRootPath = path.resolve('./')
const { getConfig } = require(path.join(ProjectRootPath, './src/config'))
module.exports = withVue2(({ config, env, empEnv }) => {
  const confEnv = env === 'production' ? 'prod' : 'dev'
  const conf = getConfig(empEnv || confEnv)
  const port = conf.port
  const publicPath = conf.publicPath
  // 设置项目URL
  config.output.publicPath(publicPath)
  // 设置项目端口
  config.devServer.port(port)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: "vue2Components",
        remotes: {
          "vue2Components": "vue2Components"
        },
        exposes: {
          "./Content.vue": "./src/components/Content"
        },
        shared: ["vue/dist/vue.esm.js"],
        // 被远程引入的文件名
        filename: 'emp.js',
      },
    }
    return args
  })

  // 配置 index.html
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: 'EMP Vue2 Components',
        // 远程调用项目的文件链接
        files: {},
      },
    }
    return args
  })
})