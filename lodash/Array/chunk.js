// Chunks an array into smaller arrays of a specified size.

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  )

chunk([1, 2, 3, 4, 5], 2) // [[1,2],[3,4],[5]]
