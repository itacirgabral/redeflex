const t0 = Date.now()

const p = Promise.resolve().then(() => "olá promessa").then(console.log)

while(Date.now() < t0 + 1000){
}