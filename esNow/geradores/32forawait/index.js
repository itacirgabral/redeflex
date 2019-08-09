const { delay1000: delay } = require('./delay.js')

const steps = async function* ([x0, xf, dx]) {
  let x = x0
  while(!(x > xf)) {
    yield delay(x)
    x = x + dx
  }
}

const af = async iteravel => {
  for await (el of iteravel) {
    console.log(el)
  }
}

af(steps([1, 9, 2]))
  .then(() => console.log('acabou bem'))
  .catch(() => console.error('ops'))

