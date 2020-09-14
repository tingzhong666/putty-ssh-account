const router = require('express').Router(),
  fs = require('fs'),
  path = require('path')

// 删除
router.post('/rm', async (req, res) => {
  // 必须
  const id = req.body.id

  if (id === null) {
    res.send({
      code: 1,
      msg: 'id未传或为空'
    })
    return
  }

  // 读取
  let accounts = fs.readFileSync(path.join(__dirname, '../', 'account/conf.json'))
  accounts = JSON.parse(accounts)

  const index = accounts.list.findIndex(async v => v.id === body2.id)
  accounts.list.splice(index, 1)

  // 覆写
  fs.writeFileSync(path.join(__dirname, '../', 'account/conf.json'), JSON.stringify(accounts))

  res.send({
    code: 1,
    msg: '',
    data: accounts
  })
})

module.exports = router
