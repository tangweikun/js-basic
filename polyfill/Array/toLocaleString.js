Object.defineProperty(Array.prototype, '_toLocaleString', {
  value: function(locales, options) {
    'use strict'

    if (this == null) {
      throw new TypeError('this is null or not defined')
    }

    const objThis = Object(this)
    const len = objThis.length >>> 0
    const separator = ','

    if (len === 0) return ''

    const firstElement = objThis[0]
    let res =
      firstElement == null ? '' : firstElement.toLocaleString(locales, options)
    let k = 1

    while (k < len) {
      const nextElement = objThis[k]

      res +=
        separator +
        (nextElement == null
          ? ''
          : nextElement.toLocaleString(locales, options))
      k++
    }

    return res
  },
})

console.log([1, 2, 3, [4, 5, ,]]._toLocaleString())
