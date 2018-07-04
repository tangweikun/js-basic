// Using apply to append an array to another

const array = ['a', 'b']
const elements = [0, 1, 2]
array.push.apply(array, elements)
// array.push(...elements)

console.log(array) // ["a", "b", 0, 1, 2]
