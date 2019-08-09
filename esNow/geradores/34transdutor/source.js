module.exports = {
  slicer: ({ delay = 1000} = {}) => async function* (arr = []) {
    for (el of arr) {
      yield new Promise( res => setTimeout(() => res(el), delay))
    }
  },
}