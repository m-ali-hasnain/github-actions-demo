const fibanocii = (num) => {
  if (num <= 1) return num
  else return fibanocii(num - 1) + fibanocii(num - 2)
}
module.exports = fibanocii
