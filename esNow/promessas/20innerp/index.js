const p1 = Promise.resolve(Promise.reject("ops"))
  .then(x => console.log(`bem resolvida ${x}`))
  .catch(x => console.log(`frustrada ${x}`))

const p2 = Promise.resolve("any")
const p22 = Promise.resolve(p2)
p22.then(() => p22 === p2 ? console.log("iguais") : console.log("diferentes"))
