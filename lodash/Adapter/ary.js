// HELP:

// Creates a function that accepts up to n arguments, ignoring any additional arguments.

const ary = (fn, n) => (...args) => fn(...args.slice(0, n))

const firstTwoMax = ary(Math.max, 2)
;[[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)) // [6, 8, 10]
