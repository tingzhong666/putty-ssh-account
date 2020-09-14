const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  portfinder = require('portfinder'),
  fs = require('fs'),
  open = require('open'),
  path = require('path'),
  mode = 'dev'

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
  // 跨域 自定义请求体允许
  .use(async (req, res, next) => {
    if (mode === 'dev') res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
  })
  // 连接主机
  .post('/connect', async (req, res) => {
    // 必须
    const body = {
      ip: req.body.ip || null,
      password: req.body.password || null,
      path: req.body.path || null
    },
    // 可选
    body2 = {
      username: req.body.username || 'root',
      port: req.body.port || 22
    }
    
    for (let k in body) {
      if (body[k] === null) {
        res.send({
          code: -1,
          msg: k + '参数未传或为空'
        })
        return
      }
    }
    
    // 反斜杠转为正斜杠
    body.path = body.path.replace(/\\/g, '/')
    // 提取目录
    const dir = body.path.replace(/\/[a-zA-Z0-9]*\.exe$/, '')
    let file = body.path.replace(dir, '')
    file = file.replace(/\//, '')
    // 读取 以及 验证 exe 程序文件
    let directory
    try {
      directory = fs.readdirSync(dir, { withFileTypes: true })
    } catch (error) {
      res.send({
        code: 0,
        msg: error.message
      })
      return
    }
    
    // 是否存在
    const isExist = directory.some(v => {
      return v.name === file
    })
    
    if (!isExist) {
      res.send({
        code: 0,
        msg: '文件不存在'
      })
      return
    }
    
    const params = [body.path, '-pw', body.password, '-P', body2.port, '-ssh']
    // 不使用 await
    open(`${body2.username}@${body.ip}`, { app: params})
    
    res.send({
      code: 1,
      msg: ''
    })
  })
  // 静态资源
  if (mode !== 'dev') {
    app.use('/css', express.static('./dist/css'))
      .use('/js', express.static('./dist/js'))
      .use('/favicon.ico', express.static('./dist/favicon.ico'))
      .use('/', async (req, res) => {
        res.sendFile(path.join(__dirname, './dist/index.html'))
      })
  } else {
    app.use('/css', express.static('./client/dist/css'))
    .use('/js', express.static('./client/dist/js'))
    .use('/favicon.ico', express.static('./client/dist/favicon.ico'))
    .use('/', async (req, res) => {
      res.sendFile(path.join(__dirname, './client/dist/index.html'))
    })
  }
  
  portfinder.getPortPromise().then(port => {
    app.listen(port, () => {
      console.log('port:' + port + ' running...')
      console.log('ready on http://localhost:' + port)
      
      open('http://localhost:' + port)
    })
  })
  