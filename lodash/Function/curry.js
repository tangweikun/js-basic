// 2018-11-29

const curry = func => {
  const len = func.length
  return function curried() {
    const args = Array.prototype.slice.call(arguments)
    if (args.length < len) {
      return function() {
        const argsInner = Array.prototype.slice.call(arguments)
        return curried.apply(this, args.concat(argsInner))
      }
    }
    return func.apply(this, args)
  }
}

var f = function(a, b, c) {
  console.log([a, b, c])
}

var curried = curry(f)
curried(1)(2)(3) // => [1, 2, 3]
curried(1, 2)(3) // => [1, 2, 3]
curried(1, 2, 3) // => [1, 2, 3]
