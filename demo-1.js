// Simple example

function* generator(i) {
  yield i
  yield i + 10
}

var gen = generator(10)

// expected output: 10
console.log(gen.next().value)

// expected output: 20
console.log(gen.next().value)
