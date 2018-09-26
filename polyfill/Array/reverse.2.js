Array.prototype._reverse = function() {
  'use strict'
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }

  for (let i = 0, j = this.length - 1; i < j; )
    this[i] = this[j] + ((this[j--] = this[i++]), 0)

  return this
}

console.log([]._reverse())
console.log([1]._reverse())
console.log([1, 2, 4, 7]._reverse())
console.log([1, 2, 4, 7, 8]._reverse())
