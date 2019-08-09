const map = f => async function* transducer (it) {
  for await (const el of it) {
    yield f(el)
  }
}

module.exports = {
  map,
}