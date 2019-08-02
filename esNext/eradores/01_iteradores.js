const simbolomagico = Symbol.iterator

const iteravel = {
  [simbolomagico]: function () {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let i = 0

    return {
      next: function () {
        const done = i > 4
        const value = vogais[i]
        i = i + 1

        return { done, value }
      }
    }
  }
}

for (v of iteravel) {
  console.log(v)
}

console.dir([...iteravel])
