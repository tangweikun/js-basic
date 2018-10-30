// 2018-11-29

// Takes a variadic function and returns a closure that
// accepts an array of arguments to map to the inputs of the function.

const spreadOver = fn => argsArr => fn(...argsArr)
// const spreadOver = fn => argsArr => fn.apply(null, argsArr)

const arrayMax = spreadOver(Math.max)
console.log(arrayMax([1, 2, 3]))
