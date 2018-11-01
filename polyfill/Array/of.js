// 2018-11-31

// Array._of = function() {
//   return Array.prototype.slice.call(arguments)
// }

Array._of = function() {
  return [...arguments]
}

console.log(Array._of())
console.log(Array._of(undefined))
console.log(Array._of(undefined, 2))
console.log(Array._of(2))
