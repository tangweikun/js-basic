function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj

  const res = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    res[key] =
      obj[key] && typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
  }

  return res
}

const foo = {
  a1: null,
  a2: undefined,
  a3: { a31: 31 },
  a4: [4, [5]],
  a5: Math.floor,
}

// const foo = [1, 2, 3, [4, 5]]

const bar = deepClone(foo)
const foobar = Object.assign({}, foo)
console.log(bar)
console.log(foo.a3 === bar.a3, foo.a4 === bar.a4)
console.log(foo.a3 === foobar.a3, foo.a4 === foobar.a4)
