const maybe = Math.random() > 0.5 ? Promise.resolve("OK") : Promise.reject("ops")

const af = async () => {
  const [err, data] = await maybe
    .then(data => [undefined, data])
    .catch(err => [err])

  if (err) {
    throw err
  } else {
    return data
  }
}

af().then(console.log).catch(console.error)


