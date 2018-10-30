// 2018-11-29

function curry(fn) {
  function nest(N, args) {
    return (...xs) =>
      N <= xs.length
        ? fn(...args, ...xs)
        : nest(N - xs.length, [...args, ...xs])
  }

  return nest(fn.length, [])
}

var f = function(a, b, c) {
  console.log([a, b, c])
}

var curried = curry(f)
curried(1)(2)(3) // => [1, 2, 3]
curried(1, 2)(3) // => [1, 2, 3]
curried(1, 2, 3) // => [1, 2, 3]
