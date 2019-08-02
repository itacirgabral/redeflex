const { asynccallback } = require('./asynccallback')

const p = new Promise(function (resolvedora, rejeitadora) {
  asynccallback(function (erro, dado) {
    if (erro) {
      rejeitadora(erro)
    } else {
      resolvedora(dado)
    }
  })
}).then(console.log).catch(console.error)
