const af = async function () {
  if (Math.random() > 0.5) {
    return "OK"
  } else {
    throw "ops"
  }
}

af().then(console.log).catch(console.error)

// botar um setTimeout