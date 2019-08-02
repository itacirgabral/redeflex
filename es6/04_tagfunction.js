const title = "SYMPLA!"
const titulo = `<h1>${ title }</h1>`

console.log(titulo)

const tagFunction = (tags, arg1) => {
  console.log(`a tag do início até o primeiro argumento foi ${tags[0]}`)
  console.log(`o primeiro argumento foi ${arg1}`)
  console.log(`a tag do primeito argumento até o final foi ${tags[1]}`)
}

tagFunction`<h1>${ title }</h1>`

