// Array.from(arrayLike[, mapFn[, thisArg]])
// HELP:
Array.nativeFrom = (function() {
  const isCallable = function(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]'
    // return typeof fn === 'function'
  }

  const toInteger = function(value) {
    const number = Number(value)
    if (isNaN(number)) {
      return 0
    }
    if (number === 0 || !isFinite(number)) {
      return number
    }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number))
  }

  const toLength = function(value) {
    const len = toInteger(value)
    return Math.min(Math.max(len, 0), Number.MAX_SAFE_INTEGER)
  }

  // The length property of the from method is 1.
  return function from(arrayLike /*, mapFn, thisArg */) {
    // 1. Let C be the this value.
    const C = this

    const items = Object(arrayLike)

    // 3. ReturnIfAbrupt(items).
    if (arrayLike == null) {
      throw new TypeError(
        'Array.from requires an array-like object - not null or undefined',
      )
    }

    const mapFn = arguments[1]
    const thisArg = arguments[2]

    if (typeof mapFn !== 'undefined') {
      if (!isCallable(mapFn)) {
        throw new TypeError(
          'Array.from: when provided, the second argument must be a function',
        )
      }
    }

    const len = toLength(items.length)

    // 13. If IsConstructor(C) is true, then
    // 13. a. Let A be the result of calling the [[Construct]] internal method
    // of C with an argument list containing the single item len.
    // 14. a. Else, Let A be ArrayCreate(len).
    const A = isCallable(C) ? Object(new C(len)) : new Array(len)

    let k = 0
    let kValue
    while (k < len) {
      kValue = items[k]
      if (mapFn) {
        A[k] =
          typeof thisArg === 'undefined'
            ? mapFn(kValue, k)
            : mapFn.call(thisArg, kValue, k)
      } else {
        A[k] = kValue
      }
      k += 1
    }

    A.length = len

    return A
  }
})()

console.log(Array.nativeFrom({ length: 3 }, (_, i) => i), null)
console.log(Array.nativeFrom({ length: 2 }))
