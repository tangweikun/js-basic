Array.prototype._slice = function() {
  'use strict'

  if (this == null) {
    throw new TypeError('this is null or not defined')
  }

  let toArray = Array.from(this)
  if (arguments.length === 0) return toArray

  let res = []
  const len = toArray.length >>> 0
  const defaultStart = arguments[0] >> 0
  let start = defaultStart < 0 ? Math.max(len + defaultStart, 0) : defaultStart
  const defaultEnd = arguments[1] >> 0
  const end = Math.min(len, defaultEnd + (defaultEnd < 0 ? len : 0))

  while (start < end) {
    res.push(toArray[start++])
  }

  return res
}

console.log([1, 2, 3, 4, 5]._slice())
console.log([1, 2, 3, 4, 5]._slice(2, 1))

console.log([1, 2, 3, 4, 5]._slice(0, 2))
console.log([1, 2, 3, 4, 5]._slice(-3, -2))
console.log([1, 2, 3, 4, 5].slice(0, -3))
console.log(Array.prototype._slice.call({ length: 2, '0': '22', '1': 55 }))
