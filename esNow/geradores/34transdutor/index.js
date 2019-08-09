const { slicer } = require('./source')
const { map } = require('./trans')
const { pipe } = require('./pipe')
const { foraw } = require('./sink')

const vogais = slicer({ delay: 0 })(['a', 'e', 'i', 'o', 'u'])
const destino = foraw(console.log)

const upperCase = map(c => c.toUpperCase())
const pWay = map(c => `p-${c}`)

;(async () => {
  console.log("----")
  await destino(vogais)
  console.log("----")
})()

// destino salvar num banco
// pipe
// filter