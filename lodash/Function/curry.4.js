function curry(fn) {
  return (...xs) => {
    if (xs.length === 0) {
      throw Error('EMPTY INVOCATION')
    }
    if (xs.length >= fn.length) {
      return fn(...xs)
    }
    return curry(fn.bind(null, ...xs))
  }
}

var f = function(a, b, c) {
  console.log([a, b, c])
}

var curried = curry(f)
curried(1)(2)(3) // => [1, 2, 3]
curried(1, 2)(3) // => [1, 2, 3]
curried(1, 2, 3) // => [1, 2, 3]
