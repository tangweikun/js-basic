// 2018-10-29

const deepFlatten = arr =>
  arr.reduce((acc, x) => acc.concat(Array.isArray(x) ? deepFlatten(x) : x), [])

console.log(deepFlatten([[1, 2], 3, [4, [5]]]))
