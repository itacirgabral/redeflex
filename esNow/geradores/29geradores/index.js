const steps = function* ([x0, xf, dx]) {
  let x = x0
  while(!(x > xf)) {
    yield x
    x = x + dx
  }
}

const iteravel = steps([1, 9, 2])

console.dir([...iteravel])

// implementar comportamento semelhante com closure

