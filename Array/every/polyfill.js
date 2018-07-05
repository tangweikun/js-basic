Array.prototype.nativeEvery = function(callbackfn, thisArg) {
  if (typeof callbackfn !== 'function') {
    throw new TypeError('callbackfn is not a function')
  }

  // HELP: Why need `Object(this)`
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

console.log([1, 3, 4].nativeEvery(x => x > 2))
console.log([1, 3, 4].nativeEvery(x => x > 0))
