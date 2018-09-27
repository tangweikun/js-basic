const deepFlatten = arr =>
  arr.reduce(
    (acc, x) => (
      Array.isArray(x) ? (acc = acc.concat(deepFlatten(x))) : acc.push(x), acc
    ),
    [],
  )
