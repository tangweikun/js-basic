// 2018-11-29

const deepFlatten = arr => {
  let res = []
  for (let v of iteratorTree(arr)) res.push(v)
  return res
}

function* iteratorTree(arr) {
  for (let v of arr) {
    if (Array.isArray(v)) yield* iteratorTree(v)
    else yield v
  }
}

console.log(deepFlatten([1, 2, 3, [4, [5, 6]]]))
