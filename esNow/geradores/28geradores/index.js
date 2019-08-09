const vogais = function* vogais () {
  yield 'a'
  yield 'e'
  yield 'i'
  yield 'o'
  yield 'u'
  return 'x'
}

const iteravel = vogais()

console.dir([...iteravel])

// for of