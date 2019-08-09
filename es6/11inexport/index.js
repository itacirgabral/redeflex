import main from './export.mjs'
import { named } from './export.mjs'
import { named as comNome } from './export.mjs'
import * as full from './export.mjs'

console.log(`main: ${main()}`)
console.log(`named: ${named()}`)
console.log(`comNome: ${comNome()}`)

console.log("")
console.log("full = ")
console.dir(full)

// node --experimental-modules 06_import.mjs
// https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive