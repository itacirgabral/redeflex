module.exports = {
  asynccallback: callback => setTimeout(() => {
    if (Math.random() > 0.5) {
      callback("NÃO")
    } else {
      callback(undefined, "SIM!")
    }
  }, 5000)
}
