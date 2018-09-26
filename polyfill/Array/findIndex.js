Array.prototype._findIndex = function(callbackfn, thisArg) {
  'use strict'

  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callbackfn !== 'function') {
    throw new TypeError('callbackfn is not a function')
  }

  const objThis = Object(this)
  const len = objThis.length >>> 0

  let k = 0
  while (k < len) {
    if (callbackfn.call(thisArg, objThis[k], k, objThis)) return k
    k++
  }

  return -1
}

console.log([1, , , 3]._findIndex(x => x > 2))
console.log([1, , , 3]._findIndex(x => !x))
console.log(Array.prototype._findIndex.call(4, x => !x))
console.log(Array.prototype._findIndex.call(null, x => !x))
console.log([1, , undefined, 3]._findIndex(x => !x))
