function* countAppleSales() {
  const saleList = [3, 7, 2, 1]
  for (let x of saleList) {
    yield x
  }
}

let foo = countAppleSales()
console.log(foo)
let bar = foo.next()
while (!bar.done) {
  console.log(bar)
  bar = foo.next()
}
