// 2018-11-31

// Array._isArray = function(arg) {
//   return Object.prototype.toString.call(arg) === '[object Array]'
// }

// Array._isArray = function(arg) {
//   return arg instanceof Array
// }

// Array._isArray = function(arg) {
//   return !!arg && arg.constructor === Array
// }

Array._isArray = function(arg) {
  return !!arg && arg.__proto__ === Array.prototype
}

console.log(Array._isArray([]))
console.log(Array._isArray({}))
console.log(Array._isArray(null))
console.log(Array._isArray(4))
console.log(Array._isArray(NaN))
console.log(Array._isArray(Array))
