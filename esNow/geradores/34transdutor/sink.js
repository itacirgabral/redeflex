module.exports = {
  foraw: f => async it => {
    for await (el of it) {
      f(el)
    }
  }
}