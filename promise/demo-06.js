const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

wait().then(() => console.log(4))
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3))
console.log(1) // 1, 2, 3, 4
