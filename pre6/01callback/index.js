debugger;

function callback (e) {
  console.log("callback sendo callbackada")
  return null
}

setTimeout(callback, 1000);

/**
 * 1. ONCLICK NO BROWSER
 * 2. --inspect-brk
 */