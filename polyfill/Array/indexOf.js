// 2018-11-31

Array.prototype._indexOf = function(target) {
  'use strict'

  if (this == null) {
    throw new TypeError('this is null or not defined')
  }

  const objThis = Object(this)
  const len = objThis.length >>> 0

  const relativeFromIndex = arguments[1] >> 0
  const fromIndex =
    relativeFromIndex < 0
      ? Math.max(0, relativeFromIndex + len)
      : relativeFromIndex
  let k = fromIndex

  while (k < len) {
    if (k in objThis && objThis[k] === target) return k
    k++
  }

  return -1
}

console.log([2, 1]._indexOf(1, 3))
