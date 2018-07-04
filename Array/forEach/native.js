// TODO:

Array.prototype.nativeForEach = function(callback) {
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }

  // If isCallable(callback) is false, throw a TypeError exception
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }

  const objThis = Object(this)
  let thisArg
  let index = 0

  // TODO: WHY??
  const len = objThis.length >>> 0

  if (arguments.length > 1) {
    thisArg = arguments[1]
  }

  while (index < len) {
    if (index in objThis) {
      callback.call(thisArg, objThis[index], index, objThis)
    }
    index++
  }
}

/******** Test Case ********/
const arr = ['first', 'second', 'third']
arr.nativeForEach((word, i, arr) => console.log(word, i, arr))

// Using `thisArg`

function Counter() {
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function(array) {
  array.nativeForEach(function(entry) {
    this.sum += entry
    this.count++
  }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])

console.log(obj.count) // 3
console.log(obj.sum) // 16
