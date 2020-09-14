const router = require('express').Router(),
  fs = require('fs'),
  open = require('open'),
  path = require('path')

// 连接并保存
router.post('/connect', async (req, res) => {
  // 必须
  const body = {
    ip: req.body.ip || null,
    password: req.body.password || null,
    path: req.body.path || null
  },
  // 可选
  body2 = {
    username: req.body.username || 'root',
    port: req.body.port || 22,
    // 传id表示 连接并保存 不传则为 连接并新增
    id: req.body.id || null,
    remark: req.body.remark || body.ip
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
  // 异步打开
  open(`${body2.username}@${body.ip}`, { app: params})
  
  let accounts = fs.readFileSync(path.join(__dirname, '../', 'account/conf.json'))
  accounts = JSON.parse(accounts)
  // 保存路径
  accounts.path = body.path
  
  // 新增
  if (body2.id === null) {
    accounts.list.push({
      // 如果为第一条数据 则从 0 开始计数 索引
      id: accounts.list.length ? accounts.list[accounts.list.length - 1].id + 1 : 1,
      ip: body.ip,
      password: body.password,
      username: body2.username,
      port: body2.port,
      remark: body2.remark
    })
    // 保存
  } else {
    const index = accounts.list.findIndex(async v => v.id === body2.id)
    accounts.list[index] = {
      id: body2.id,
      ip: body.ip,
      password: body.password,
      username: body2.username,
      port: body2.port,
      remark: body2.remark
    } 
  }
  
  // 覆写json文件
  fs.writeFileSync(path.join(__dirname, '../', 'account/conf.json'), JSON.stringify(accounts))
  
  res.send({
    code: 1,
    msg: '',
    data: accounts
  })
})

module.exports = router
