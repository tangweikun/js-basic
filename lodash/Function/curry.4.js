// 2018-10-29
// 2018-11-26

function curry(fn) {
  return function() {
    return fn.length <= arguments.length
      ? fn(...arguments)
      : curry(fn.bind(null, ...arguments))
  }
}

var f = function(a, b, c) {
  console.log([a, b, c])
}

var curried = curry(f)
curried(1)(2)(3) // => [1, 2, 3]
curried(1, 2)(3) // => [1, 2, 3]
curried(1, 2, 3) // => [1, 2, 3]
