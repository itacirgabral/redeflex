const { delay1000: delay } = require('./delay.js')

const steps = /* async */ function* ([x0, xf, dx]) {
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
    console.log(value)
    el = iteravel.next()
  }
}

af(steps([1, 9, 2]))
  .then(() => console.log('acabou bem'))
  .catch(() => console.error('ops'))

// usar gerador asincrono