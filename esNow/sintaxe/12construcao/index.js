const att2 = 'atributo 2'

const obj1 = {}
obj1.att1 = 'atributo 1 do objeto 1'
obj1.att2 = att2
obj1.att3 = function att3(){}
obj1[`att${5 - 1}`] = 'atributo 4 do objeto 1'

const obj2 = {
  att1: 'atributo 1 do objeto 2',
  att2,
  att3(){},
  [`att${5 - 1}`]: 'atributo 4 do objeto 2',
}

const obj3 = {
  att1: 'atributo 1 do objeto 3',
  ...obj1,
  att4: 'atributo 4 do objeto 3',
}

console.dir(obj1)
console.dir(obj2)
console.dir(obj3)