var avo = {
  nome: "lucrecia borges",
  borges: true
}

var mae = Object.create(avo)
mae.nome = "magda valenca",
mae.valenca = true

var filha = Object.create(mae)
filha.nome = "sabrina fernandes",
filha.fernandes = true


console.log("A sabrina é borges?")
console.log(filha.borges ? "sim" : "não")

console.log("")

console.log("A sabrina tem borges?")
console.log(Object.getOwnPropertyNames(filha).includes("borges") ? "sim" : "não")

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create