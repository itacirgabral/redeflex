import main from './06_export.mjs'
import { named } from './06_export.mjs'
import { named as comNome } from './06_export.mjs'
import * as full from './06_export.mjs'

console.log(`main: ${main()}`)
console.log(`named: ${named()}`)
console.log(`comNome: ${comNome()}`)

console.log("")
console.log("full = ")
console.dir(full)

// node --experimental-modules 06_import.mjs
