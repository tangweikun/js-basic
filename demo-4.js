// Return statement in a generator

function* yieldAndReturn() {
  yield 'Y'
  return 'R'
  yield 'unreachable'
}

var gen = yieldAndReturn()
console.log(gen.next()) // { value: "Y", done: false }
console.log(gen.next()) // { value: "R", done: true }
console.log(gen.next()) // { value: undefined, done: true }
