// 2018-11-29

// Creates a function that accepts up to n arguments, ignoring any additional arguments.

const ary = (fn, n) => (...args) => fn(...args.slice(0, n))

const firstTwoMax = ary(Math.max, 2)
console.log([[2, 6, 12], [8, 4, 6], [10]].map(x => firstTwoMax(...x)))

// function ary(fn, n) {
//   return function() {
//     return fn.apply(null, [].slice.call(arguments, 0, n))
//   }
// }
