const { exec } = require('child_process')

exec('git push', (err, stdout, stderr) => {
  console.log({
    err,
    stdout,
    stderr,
  })
  if (!err) {
    console.log('提交已推送')
  }
  // handle err, stdout & stderr
})
