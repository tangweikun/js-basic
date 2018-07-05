Array.prototype.nativeFill = function(value) {
  const start = arguments[1] >> 0
  const end =
    arguments[2] === undefined
      ? this.length
      : Math.min(arguments[2] >> 0, this.length)

  for (let i = start; i < end; i++) {
    this[i] = value
  }

  return this
}

console.log([1, 2, 3].nativeFill(null, 1, 5))
console.log([1, 2, 3].nativeFill(null))
console.log([1, 2, 3].nativeFill(null, 2))
