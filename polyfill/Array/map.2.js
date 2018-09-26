Array.prototype._map = function(callbackfn, thisArg) {
  return this.reduce(
    (acc, currentValue, idx, array) => (
      (acc[idx] = callbackfn.call(thisArg, currentValue, idx, array)), acc
    ),
    [],
  )
}

console.log([1, , , 2]._map(x => x * x))
