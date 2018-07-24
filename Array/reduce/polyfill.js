Object.defineProperty(Array.prototype, 'nativeReduce', {
  value: function(callback /*, initialValue*/) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function')
    }

    const len = this.length >>> 0
    let k = 0
    let accumulate

    if (arguments.length >= 2) {
      accumulate = arguments[1]
    } else {
      while (k < len && !(k in this)) {
        k++
      }

      if (k >= len) {
        throw new TypeError('Reduce of empty array ' + 'with no initial value')
      }
      accumulate = this[k++]
    }

    while (k < len) {
      if (k in this) {
        accumulate = callback(accumulate, this[k], k, this)
      }

      k++
    }

    return accumulate
  },
})

console.log(
  [1, 2].nativeReduce((accumulate, current) => accumulate + current, 10),
)

console.log(
  [].nativeReduce((accumulate, current) => accumulate + current, undefined),
)
