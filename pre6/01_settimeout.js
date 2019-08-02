debugger;

function callback (e) {
  console.log("callback sendo callbackada")
  return null
}

setTimeout(callback, 100);
