const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)

var f = function(a, b, c) {
  console.log([a, b, c])
}

var curried = curry(f)
curried(1)(2)(3) // => [1, 2, 3]
curried(1, 2)(3) // => [1, 2, 3]
curried(1, 2, 3) // => [1, 2, 3]
