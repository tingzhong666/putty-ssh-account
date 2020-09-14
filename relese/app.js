const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  portfinder = require('portfinder'),
  open = require('open'),
  path = require('path'),
  routes = require('./routes'),
  mode = require('./conf').mode

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
  // 跨域 自定义请求体允许
  .use(async (req, res, next) => {
    if (mode === 'dev') res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
  })
  // 路由
  .use(routes)
  
// 静态资源
if (mode !== 'dev') {
  app.use('/css', express.static(path.join(__dirname, './dist/css')))
    .use('/js', express.static(path.join(__dirname, './dist/js')))
    .use('/favicon.ico', express.static(path.join(__dirname, './dist/favicon.ico')))
    .use('/', async (req, res) => {
      res.sendFile(path.join(__dirname, './dist/index.html'))
    })
}

// 查找开放端口 并启动服务
portfinder.getPortPromise().then(port => {
  app.listen(port, () => {
    console.log('port:' + port + ' running...')
    console.log('ready on http://localhost:' + port)
    
    // 启动后 打开默认浏览器访问
    if (mode !== 'dev') {
      open('http://localhost:' + port)
    }
  })
})
  