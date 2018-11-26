// 2018-12-09

function deepFreeze(obj) {
  const propNames = Object.getOwnPropertyNames(obj)

  // Freeze properties before freezing self
  for (let name of propNames) {
    let value = obj[name]
    obj[name] = value && typeof value === 'object' ? deepFreeze(value) : value
  }

  return Object.freeze(obj)
}

var obj2 = {
  internal: {
    a: null,
  },
}
deepFreeze(obj2)
obj2.internal.a = 'anotherValue' // fails silently in non-strict mode
console.log(obj2.internal.a)
