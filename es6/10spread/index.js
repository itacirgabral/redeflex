const aei = ['a', 'e', 'i']
const ou = ['o', 'u']

// distribuindo
const vogais = [...aei, ...ou]
console.log(vogais)

// coletando
const cutHead = (h, ...tail) => tail
console.log(cutHead('head', 't', 'a', 'i', 'l'))
