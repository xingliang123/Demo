'use strict'
const path = require('path')
const Timestamp = new Date().getTime();
//const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = '报告工作站' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9530 npm run dev OR npm run dev --port = 9530
const port = process.env.port || process.env.npm_config_port || 9526 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  transpileDependencies: ['common'],
  // transpileDependencies: ['element-ui'],
  // chainWebpack(config) {
  //   config.entry('main').add('babel-polyfill')
  // },
  filenameHashing: false,
  runtimeCompiler: true,
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!publicPath: '/',
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: process.env.VUE_APP_STATICS_API,
  outputDir: 'PATHNetRPT',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/report': {
        target: 'http://192.168.0.243:12196/PATHNetRPT', // 请求本地 需要cr后端项目
        //target: "http://192.168.0.124:8083/PATHNetRPT",
        ws: true
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    },
    //before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: [".ts", ".js", ".json"]
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
      filename: 'static/js/[name].js?v=' + Timestamp,
      chunkFilename: 'static/js/[name].js?v=' + Timestamp,
    },
    devtool: 'source-map',
    // plugins: [new SkeletonWebpackPlugin({
    //   webpackConfig: {
    //     entry: {
    //       app: path.join(__dirname, './src/Skeleton.js'),
    //     },
    //   },
    //   minimize: true,
    //   quiet: false,
    //   router: {
    //     mode: 'hash',
    //     routes: [{
    //         path: '/ReportWorkStation/report/ReportIndex',
    //         skeletonId: 'listSkeleton'
    //       },
    //       {
    //         path: /^\/detail/,
    //         skeletonId: 'detailSkeleton'
    //       }
    //     ]
    //   }
    // })],
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [{
      rel: 'preload',
      // to ignore runtime.js
      // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      include: 'initial'
    }])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    config.plugin('mini-css-extract-plugin')
      .use(require('mini-css-extract-plugin'), [{
        filename: `static/css/[name].css?v=` + Timestamp,
        chunkFilename: `static/css/[id].css?v=` + Timestamp,
      }]).end()
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        return {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: `static/img/[name].[ext]?v=` + Timestamp
            }
          }
        };
      })
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module
      .rule('ts')
      .test(/\.(ts)$/)
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        // 配置能够识别vue中的ts
        appendTsSuffixTo: [/\.vue$/]
      })
      .end()
    config.module
      .rule('worker-loader')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .end()
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  }
}