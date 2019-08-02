const co = function* (fn) {
  let y = fn()
  while (y) {
    y = fn(yield y)
  }
}
const inc = (x = 0) => x + 1
const it = co(inc)

console.dir(it.next(0))
console.dir(it.next(7))
console.dir(it.next(3))
console.dir(it.next(-1))
console.dir(it.next(3))
console.dir(it.next(3))

// é possível retornar uma promessa?
