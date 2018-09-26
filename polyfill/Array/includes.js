Array.prototype._includes = function(target) {
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

  function sameValueZero(x, y) {
    return (
      x === y ||
      (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))
    )
  }

  let k = fromIndex
  while (k < len) {
    if (sameValueZero(objThis[k], target)) return true
    k++
  }

  return false
}

console.log([1, 2, NaN, ,]._includes(undefined))
