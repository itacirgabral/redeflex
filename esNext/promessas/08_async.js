const { delay1000: delay } = require('./delay')

const af = async () => {
  const OK = await delay("OK")

  if (Math.random() > 0.5) {
    return OK
  } else {
    throw "ops"
  }
}

af().then(console.log).catch(console.error)

