Array.prototype._filter = function(callbackfn, thisArg) {
  'use strict'

  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callbackfn !== 'function') {
    throw new TypeError('callbackfn is not a function')
  }

  const len = this.length >>> 0
  const res = new Array(len)

  let count = 0

  for (let i = 0; i < len; i++) {
    if (i in this) {
      if (callbackfn.call(thisArg, this[i], i, this)) {
        res[count++] = this[i]
      }
    }
  }

  res.length = count
  return res
}

console.log([1, 2, 3, 4]._filter(x => x > 2))
console.log([1, 2, 3, 4]._filter(x => false))
