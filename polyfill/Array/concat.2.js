// Maybe have bugs

Array.prototype._concat = function() {
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }

  const args = Array.prototype.slice.call(arguments)

  return args.reduce(
    (acc, x) =>
      Array.isArray(x)
        ? x.reduce((res, curr) => (res.push(curr), res), acc)
        : (acc.push(x), acc),
    this,
  )
}

console.log([3, , , 4]._concat(3, [4, 5], [[]]))
console.log([3, , , 4]._concat())
