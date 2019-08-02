const steps = function* ([x0, xf, dx]) {
  let x = x0
  while(!(x > xf)) {
    yield Promise.resolve(x)
    x = x + dx
  }
}

const iteravel = steps([1, 9, 2])

let el = iteravel.next()
while (!el.done) {
  console.dir(el)
  el = iteravel.next()
}
