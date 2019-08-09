function* yinYang () {
  yield "ying"
  yield "yang"
  yield* yinYang()
}

const it = yinYang()
let el

for(let i = 0; i < 10; i++) {
  el = it.next()
  console.log(el.value)
}

// Maximum call stack size exceeded