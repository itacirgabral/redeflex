const { delay1000: delay } = require('./delay')

const af = async () => {
  const vogais = []
  vogais.push(await delay("a"))
  vogais.push(await delay("e"))
  vogais.push(await delay("i"))
  vogais.push(await delay("o"))
  vogais.push(await delay("u"))

  return vogais
}

af().then(console.log).catch(console.error)

