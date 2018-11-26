// 2018-10-29

const flattenObject = (obj, prefix = '') => {
  const res = {}
  for (const key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      Object.assign(res, flattenObject(obj[key], prefix + key + '.'))
    } else {
      res[prefix + key] = obj[key]
    }
  }

  return res
}

console.log(
  flattenObject({
    a: { b: 1, c: 4, e: { aa: 3 } },
    d: 44,
    f: undefined,
    g: null,
    k: [],
    h: [1, 2],
    hh: /a/,
    kk: {},
  }),
)
