const { exec } = require('child_process')
const interval = 5000
repeat(stop => {
  exec('git push', (err, stdout, stderr) => {
    // console.log({
    //   err,
    //   stdout,
    //   stderr,
    // })
    if (!err) {
      console.log('提交已推送')
      stop()
    } else {
      console.log('推送失败')
      console.log(err.message)
      console.log('继续尝试推送')
    }
    // handle err, stdout & stderr
  })
})

function repeat(fn) {
  let hasStopped = false
  let timer2
  let timer = setTimeout(function repeatMe() {
    if (hasStopped) {
      return
    }
    fn(stop)
    timer2 = setTimeout(repeatMe, interval)
  }, interval)
  return stop
  function stop() {
    hasStopped = true
    clearTimeout(timer)
    clearTimeout(timer2)
  }
}
