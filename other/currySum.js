// 2018-10-29

function sum() {
  const args = Array.prototype.slice.call(arguments)

  const fn = function() {
    const args_fn = Array.prototype.slice.call(arguments)
    return sum.apply(null, args.concat(args_fn))
  }

  fn.valueOf = () => args.reduce((a, b) => a + b)

  return fn
}

console.log(sum(1) + 0)
console.log(sum(1, 2, 3) + 0)
console.log(sum(1, 2)(3) + 0)
console.log(sum(1)(2, 3)(4) + 0)
