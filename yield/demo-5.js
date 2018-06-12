// Generator defined in an expression

const foo = function*() {
  yield 10
  yield 20
}

const bar = foo()

// { value: 10, done: false }
console.log(bar.next())
