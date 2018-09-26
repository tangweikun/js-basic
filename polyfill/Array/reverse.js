Array.prototype._reverse = function() {
  'use strict'
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  const objThis = Object(this)
  const len = objThis.length >>> 0
  let k = 0
  while (k < Math.floor(len / 2)) {
    const temp = objThis[k]
    objThis[k] = objThis[len - 1 - k]
    objThis[len - 1 - k] = temp
    k++
  }
  return objThis
}

console.log([]._reverse())
console.log([1]._reverse())
console.log([1, 2, 4, 7]._reverse())
console.log([1, 2, 4, 7, 8]._reverse())
