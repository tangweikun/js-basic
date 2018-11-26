// 2018-10-29

// Groups the elements of an array based on the given function and returns the count of elements in each group.

const countBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => ((acc[val] = (acc[val] || 0) + 1), acc), {})

console.log(countBy([6.1, 4.2, 6.3], Math.floor))
console.log(countBy(['one', 'two', 'three'], 'length'))
