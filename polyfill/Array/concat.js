// Maybe have bugs

Array.prototype._concat = function() {
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }

  const args = Array.prototype.slice.call(arguments)
  const len = args.length
  const res = Array.prototype.slice.call(this)
  let k = 0

  while (k < len) {
    if (Array.isArray(args[k])) {
      args[k].forEach(x => res.push(x))
    } else {
      res.push(args[k])
    }

    k++
  }

  return res
}

console.log([3, , , 4]._concat(3, [4, 5], [[]]))
