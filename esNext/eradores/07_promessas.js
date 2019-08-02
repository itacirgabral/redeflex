const { delay1000: delay } = require('./../promessas/delay.js')

const steps = function* ([x0, xf, dx]) {
  let x = x0
  while(!(x > xf)) {
    yield delay(x)
    x = x + dx
  }
}

const af = async iteravel => {
  let el = iteravel.next()
  while (!el.done) {
    const value = await el.value
    console.dir({ value, done: el.done })
    el = iteravel.next()
  }
}

af(steps([1, 9, 2]))
  .then(() => console.log('acabou bem'))
  .catch(() => console.error('ops'))
