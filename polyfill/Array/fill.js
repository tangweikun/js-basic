Object.defineProperty(Array.prototype, '_fill', {
  value: function(value, start, end) {
    if (this == null) {
      throw new TypeError('this is null or not defined')
    }

    const O = Object(this)
    const len = O.length >>> 0

    const relativeStart = start >> 0
    const left =
      relativeStart < 0
        ? Math.max(len + relativeStart, 0)
        : Math.min(relativeStart, len)

    const relativeEnd = end === undefined ? len : end >> 0
    const right =
      relativeEnd < 0
        ? Math.max(len + relativeEnd, 0)
        : Math.min(relativeEnd, len)

    while (left < right) {
      O[left] = value
      left++
    }

    return O
  },
})

console.log([1, 2, 3]._fill(null, -1))
console.log([1, 2, 3]._fill(null, 3, 2))
console.log([1, 2, 3]._fill(null, 2))
