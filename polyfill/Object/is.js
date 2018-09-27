Object._is = function(x, y) {
  if (x === y) {
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y
  }
  // Step 6.a: NaN == NaN
  return x !== x && y !== y
}
