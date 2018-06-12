function* list() {
  for (let i = 0; i < arguments.length; i++) {
    yield arguments[i]
  }
  return 'done'
}

const foo = list(1, 2, 3)

console.log(foo.next()) // { value: 1, done: false }
console.log(foo.next()) // { value: 2, done: false }
console.log(foo.next()) // { value: 3, done: false }
console.log(foo.next()) // { value: 'done', done: true }
console.log(foo.next()) // { value: undefined, done: true }
