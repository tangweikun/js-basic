// Array._isArray = function(arg) {
//   return Object.prototype.toString.call(arg) === '[object Array]'
// }

// Array._isArray = function(arg) {
//   return arg instanceof Array
// }

// Array._isArray = function(arg) {
//   return arg.constructor === Array
// }

Array._isArray = function(arg) {
  return arg.__proto__ === Array.prototype
}

console.log(Array._isArray([]))
console.log(Array._isArray({}))
