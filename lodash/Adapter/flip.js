// 2018-11-29

// Flip takes a function as an argument, then makes the first argument the last.

const flip = fn => (first, ...rest) => fn(...rest, first)

let a = { name: 'John Smith' }
let b = {}
const mergeFrom = flip(Object.assign)
let mergePerson = mergeFrom.bind(null, a)
mergePerson(b) // == b
b = {}
Object.assign(b, a) // == b
