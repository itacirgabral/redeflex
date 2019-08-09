const enter = '\n'
const json = ''+
'{' + enter +
'  "site": "github.com/douglascrockford/JSON-js",' + enter +
'  "texto": [' + enter +
'    "JSON is a light-weight, language independent, data interchange format.",' + enter +
'    "JSON became a built-in feature of JavaScript when the ECMAScript Programming Language Standard",' + enter +
'    "On current browsers, this file does nothing, preferring the built-in JSON object",' + enter +
'    "There is no reason to use this file unless fate compels you to support IE8, which is something that no one should ever have to do again."' + enter +
'  ]' + enter +
'}'

console.log('JSON:')
console.log(json)

const obj = JSON.parse(json)
