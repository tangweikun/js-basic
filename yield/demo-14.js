function* demo() {
  yield 'a', yield 'b'
}

const bar = demo()
console.log(bar.next())
console.log(bar.next())
console.log(bar.next())
