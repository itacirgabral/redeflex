const soma = a => b => a + b
const vezes = c => x => c * x
const pipe = f => g => x => g(f(x))

//  __    __  ______  _____  __  __ 
// |  |__|  ||      ||     ||  ||  |
// |  |  |  ||      ||   __||  ||  |
// |  |  |  ||_|  |_||  |_  |__||__|
// |  `  '  |  |  |  |   _]  __  __ 
//  \      /   |  |  |  |   |  ||  |
//   \_/\_/    |__|  |__|   |__||__|

const soma1 = soma(1)
const vezes2 = vezes(2)
const duasVezesMaisUm = pipe(vezes2)(soma1)

const impares = Array(5).fill().map(
  (_, i) => i
).map(
  duasVezesMaisUm
)

console.log(impares)

// criar uma função que receba N e retorne um array com os numeros ímpares de
// 1 até N
