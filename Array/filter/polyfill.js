Array.prototype.nativeFilter = function(callbackfn, thisArg) {
  if (Object.prototype.toString.call(callbackfn) !== '[object Function]') {
    throw new TypeError(`${callbackfn} is not a function`)
  }

  const res = []
  for (let i in this) {
    if (callbackfn.call(thisArg, this[i], i, this)) res.push(this[i])
  }

  return res
}

console.log([1, 2, 3, 4].nativeFilter(x => x > 2))
console.log([1, 2, 3, 4].nativeFilter(x => false))
