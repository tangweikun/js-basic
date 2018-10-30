// 2018-11-29

// Chunks an array into smaller arrays of a specified size.

// const chunk = (arr, size) =>
//   Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
//     arr.slice(i * size, i * size + size),
//   )

const chunk = (arr, size) =>
  arr.reduce(
    (acc, x, i) =>
      i % size ? [...acc.slice(0, -1), acc.pop().concat(x)] : [...acc, [x]],
    [],
  )

console.log(chunk([1, 2, 3, 4, 5], 2)) // [[1,2],[3,4],[5]]
