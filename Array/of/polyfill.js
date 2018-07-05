Array.nativeOf = function() {
  return Array.prototype.slice.call(arguments)
  // return [...arguments]
}

console.log(Array.nativeOf(1, 2, 3))
