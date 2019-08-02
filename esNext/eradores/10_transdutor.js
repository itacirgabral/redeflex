/*
 * high order generator does not accept on input what it generates itself on output
 * javascript generator async transducer iterator 
 * I'm coding a generator that should return
 */
const delay = x => new Promise((res, rej) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      res(x)
    } else {
      rej()
    }
  }, 250 * ( 1 + Math.random()))
})

const vowels = ['a', 'e', 'i', 'o', 'u']
const toUpp = c => c.toUpperCase()
const pWay = c => `p-${c}`

const gen = /* async */ function* (arr) {
  for (el of arr) {
    yield delay(el)
  }
}

const itA = vowels[Symbol.iterator]()
const itD = gen(vowels)

const map = f => async function* (it) {
  let el = await it.next()
  let err = false
  while (!el.done) {
    const val = await Promise.resolve(el.value).catch(() => err = true)
    err ?  err = true : yield f(val)
    el = await it.next()
  }
}

const transUp = map(toUpp)
const transPw = map(pWay)

const tpa = transPw(itA)
const tupa = transUp(tpa)
const tpupa = transPw(tupa)

const tpd = transPw(itD)
const tupd = transUp(tpd)
const tpupd = transPw(tupd)

const foraw = async it => {
  for await (const el of it) {
    console.log(el)
  }
}
foraw(tpupd)
  .then(() => console.log('ok!'))
  .catch(() => console.error('ops'))
