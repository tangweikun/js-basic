Array.prototype.nativeIndexOf = function indexOf(member, startFrom) {
  let index = isFinite(startFrom) ? Math.floor(startFrom) : 0
  const len = isFinite(this.length) ? Math.floor(this.length) : 0

  if (index >= len) return -1

  if (index < 0) {
    index = Math.max(len + index, 0)
  }

  if (member === undefined) {
    do {
      if (index in this && this[index] === undefined) {
        return index
      }
    } while (++index < len)
  } else {
    do {
      if (this[index] === member) {
        return index
      }
    } while (++index < len)
  }

  return -1
}

console.log([1].nativeIndexOf(1))
