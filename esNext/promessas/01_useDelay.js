const { delay1000: delay } = require('./delay.js')

const pa = delay('a').then(console.log).catch(console.error)
const pe = delay('e').then(console.log).catch(console.error)
const pi = delay('i').then(console.log).catch(console.error)
const po = delay('o').then(console.log).catch(console.error)
const pu = delay('u').then(console.log).catch(console.error)

const pvogais = [pa, pe, pi, po, pu]
console.dir(pvogais)

// 1) transforme em maiusculas
// 2) de 1) imprima as letras em ordem alfabetica apenas se nao nao houver erros
