const { iless } = require('./iless')
const { pequeno: arr } = require('./vetores')

function perm (arr, prefix = '') {
  const output = []

  for(let i = 0; i < arr.length; i++) {
    const arri = arr[i]
    const arriless = iless(arr, i)
    const permiless = perm(arriless)

    const distributivo = permiless.length > 0 ?
      permiless.map(el => arri.concat(el)) :
      [arri]
    
    distributivo.forEach(e => output.push(e))
  }

  return output
}

const permutacoes = perm(arr)

for(const el of permutacoes) {
  console.log(el)
}

// memory failure 
// passar pra gerador