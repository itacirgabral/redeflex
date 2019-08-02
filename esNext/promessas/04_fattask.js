const t0 = Date.now()
let p = Promise.resolve()

setTimeout(() => console.log("Olá timeout"), 0)

const loop = () => {
  if (Date.now() < t0 + 1000) {
    p.then(loop)
  }
}
p.then(loop)
