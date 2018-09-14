var clock = function*() {
  while (true) {
    console.log('Tick!')
    yield
    console.log('Tock!')
    yield
  }
}

const foo = clock()
for (let i = 0; i < 10; i++) {
  foo.next()
}
