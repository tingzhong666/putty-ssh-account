const path = require('path'),
  outdir = require('./conf').out,
  fse = require('fs-extra'),
  { dependencies, name, version } = require('./package.json'),
  spawn = require('cross-spawn')

async function main () {
  // 删除
  fse.emptyDirSync(outdir)

  // 前端 vue 构建
  spawn('npm', ['run', 'build'], {
    stdio: 'inherit',
    cwd: path.join(__dirname, 'client')
  })

  // 服务端构建
  fse.copy(path.join(__dirname, 'routes'), path.join(outdir, 'routes'))
  fse.copy(path.join(__dirname, 'app.js'), path.join(outdir, 'app.js'))
  fse.outputJSON(path.join(outdir, 'conf.json'), { mode: 'production' })

  const package = { dependencies, name, version }
  package.scripts = { start: 'node app.js' }
  fse.outputJSON(path.join(outdir, 'package.json'), package)

  fse.outputFile(path.join(outdir, 'README.md'), `# Use
  \`\`\`npm run start`)

  fse.outputJSON(path.join(outdir, 'account/conf.json'), { path: '', list: [] })
}

main()
