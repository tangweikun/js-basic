Array.prototype._reduce = function(callbackfn) {
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
  let res

  if (arguments.length > 1) {
    res = arguments[1]
  } else {
    while (k < len && !(k in objThis)) {
      k++
    }
    if (k >= len) {
      throw new TypeError('Reduce of empty array ' + 'with no initial value')
    }
    res = objThis[k++]
  }

  while (k < len) {
    if (k in objThis) {
      res = callbackfn(res, objThis[k], k, objThis)
    }
    k++
  }

  return res
}

console.log([1, 2]._reduce((accumulate, current) => accumulate + current, 10))
console.log([1, 2]._reduce((accumulate, current) => accumulate + current))
console.log(
  []._reduce((accumulate, current) => accumulate + current, undefined),
)
