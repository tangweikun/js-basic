Array.prototype._forEach = function(callbackfn, thisArg) {
  'use strict'

  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callbackfn !== 'function') {
    throw new TypeError('callbackfn is not a function')
  }

  const objThis = Object(this)
  const len = objThis.length >>> 0
  let i = 0

  while (i < len) {
    if (i in objThis) {
      callbackfn.call(thisArg, objThis[i], i++, objThis)
    }
  }
}

/******** Test Case ********/
const arr = ['first', 'second', 'third']
arr._forEach((word, i, arr) => console.log(word, i, arr))

// Using `thisArg`

function Counter() {
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function(array) {
  array._forEach(function(entry) {
    this.sum += entry
    this.count++
  }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])

console.log(obj.count) // 3
console.log(obj.sum) // 16
