// The value of yield* expression itself

function* g4() {
  yield* [1, 2, 3]
  return 'foo'
}

var result

function* g5() {
  result = yield* g4()
}

var iterator = g5()

console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: undefined, done: true},
// g4() returned {value: 'foo', done: true} at this point

console.log(result) // "foo"
