// 如果return方法调用时，不提供参数，则返回值的 value 属性为 undefined

function* gen() {
  yield 1
  yield 2
  yield 3
}

var g = gen()

g.next() // { value: 1, done: false }
g.return() // { value: undefined, done: true }
