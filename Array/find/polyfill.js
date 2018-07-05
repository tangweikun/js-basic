Array.prototype.nativeFind = function(callbackfn, thisArg) {
  if (typeof callbackfn !== 'function') {
    throw new TypeError(`${callbackfn} is not a function`)
  }

  for (let i = 0; i < this.length; i++) {
    if (callbackfn.call(thisArg, this[i], i, this)) return this[i]
  }
}

console.log([1, 2, 3, 4].nativeFind(x => x > 21))
console.log([{ v: 1 }, { v: 2 }, { v: 3 }].nativeFind(({ v }) => v > 1))
