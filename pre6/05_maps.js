var todo = [
  { id: 0, size:4, isDone: true, text: "pre es6" },
  { id: 1, size:6, isDone: false, text: "sintaxes" },
  { id: 2, size:2, isDone: false, text: "módulo" },
  { id: 3, size:8, isDone: false, text: "promessas" },
  { id: 4, size:2, isDone: false, text: "iteradores" },
  { id: 5, size:4, isDone: false, text: "geradores" }
]

function isNotDone (obj) {
  return !obj.isDone;
}

function textOnly (obj) {
  return obj.text;
}

var proximosCapitulos = todo.filter(isNotDone).map(textOnly).join("\n")

console.log(proximosCapitulos)
