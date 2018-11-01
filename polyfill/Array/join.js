// 2018-11-31

Array.prototype._join = function(separator = ',') {
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  return this.reduce((acc, x) => acc + separator + (x || ''))
}

console.log([1, null, undefined, [2, [3], [4, 5, ['a', [], []]]], 6].join('@'))
console.log([1, null, undefined, [2, [3], [4, 5, ['a', [], []]]], 6]._join('@'))
console.log([1, null, undefined, [2, [3], [4, 5, ['a', [], []]]], 6].join())
console.log([1, null, undefined, [2, [3], [4, 5, ['a', [], []]]], 6]._join())
