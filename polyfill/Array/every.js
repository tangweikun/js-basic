// 2018-11-29

Array.prototype._every = function(callbackfn, thisArg) {
  'use strict'

  if (typeof this == null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callbackfn !== 'function') {
    throw new TypeError('callbackfn is not a function')
  }

  const O = Object(this)
  const len = O.length >>> 0

  let k = 0
  while (k < len) {
    if (k in O) {
      const testResult = callbackfn.call(thisArg, O[k], k, O)
      if (!testResult) return false
    }
    k++
  }
  return true
}

console.log([1, 3, 4]._every(x => x > 2))
console.log([1, 3, 4, , 5]._every(x => x > 0))
