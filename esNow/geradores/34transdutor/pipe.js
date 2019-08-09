module.exports = {
  pipe: (...fs) => fs.reduce((acc, el) => x => el(acc(x)), x => x)
}