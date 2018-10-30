// 2018-11-29

// Creates a function that invokes each provided function with the arguments it receives and returns the results.

const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args))

const minMax = over(Math.min, Math.max)
minMax(1, 2, 3, 4, 5) // [1,5]
