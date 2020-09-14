const router = require('express').Router(),
  fs = require('fs'),
  path = require('path')

// 获取
router.get('/list', async (req, res) => {
  // 读取
  let accounts = fs.readFileSync(path.join(__dirname, '../', 'account/conf.json'))
  accounts = JSON.parse(accounts)

  res.send({
    code: 1,
    msg: '',
    data: accounts
  })
})

module.exports = router
