function* outer() {
  yield 'begin'
  yield inner()
  yield 'end'
}

function* inner() {
  yield 'inner'
}

var it = outer()

console.log(it.next().value) // -> 输出：begin

console.log(it.next().value) // -> 输出：{}

console.log(it.next().value) // -> 输出：end
