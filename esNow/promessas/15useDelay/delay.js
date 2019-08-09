const delay = t => x => new Promise((res, rej) => {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      res(x)
    } else {
      rej()
    }
  }, t * 0.5 * ( 1 + Math.random()))
})

module.exports = {
  delay100: delay(100),
  delay500: delay(500),
  delay1000: delay(1000),
  delay2000: delay(2000),
  delay5000: delay(5000),
}
