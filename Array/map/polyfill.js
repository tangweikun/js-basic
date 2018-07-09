Array.prototype.nativeMap = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }

  const len = this.length >>> 0
  const A = new Array(len)
  let k = 0

  while (k < len) {
    if (k in this) {
      A[k] = callback.call(thisArg, this[k], k, this)
    }
    k++
  }

  return A
}

console.log([1, 2].nativeMap(x => x * x))
