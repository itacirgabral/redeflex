const impares = [1, 3, 5, 7, 9 ]
const iteravel = impares[Symbol.iterator]()

let el = iteravel.next()
while (!el.done) {
  console.dir(el)
  el = iteravel.next()
}

// for of