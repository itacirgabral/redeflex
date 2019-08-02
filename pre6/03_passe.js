function criadora () {
  var aqui = "escondido na criadora"
  return function (arg) {
    console.log("aqui this = " + this.aqui)
    console.log("aqui closure = " + aqui)
    console.log("aqui arg = " + arg.aqui)
  }
}

var obj1 = {
  aqui: "obj1"
}
var argumento = {
  aqui: "parametro passado para funcao"
}

var funcaoNova = criadora()
obj1.funcaoNova = funcaoNova

obj1.funcaoNova(argumento)
