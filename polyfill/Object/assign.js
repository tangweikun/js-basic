// HELP:

// Must be writable: true, enumerable: false, configurable: true
Object.defineProperty(Object, '_assign', {
  value: function assign(target, varArgs) {
    'use strict'
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object')
    }

    const objTarget = Object(target)

    for (let index = 1; index < arguments.length; index++) {
      const nextSource = arguments[index]

      if (nextSource != null) {
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            objTarget[nextKey] = nextSource[nextKey]
          }
        }
      }
    }
    return objTarget
  },
  writable: true,
  configurable: true,
})
