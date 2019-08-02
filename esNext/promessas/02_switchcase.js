const inc = x => x + 1

const p1 = Promise.resolve(1)
const e1 = Promise.reject(1)

const p2 = p1.then(inc)
const e2 = e1.then(inc)

const p3 = p2.then(inc)
const e3 = e2.then(inc)

p3.then(x => console.log(`p3.then -> ${x}`))
e3.then(x => console.log(`e3.then -> ${x}`))

p3.catch(x => console.log(`p3.catch -> ${x}`))
e3.catch(x => console.log(`e3.catch -> ${x}`))
