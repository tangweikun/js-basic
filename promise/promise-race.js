var p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'one')
})

var p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'two')
})

// two
Promise.race([p1, p2]).then(values => {
  console.log(values)
})

// ['one', 'two']
Promise.all([p1, p2]).then(values => {
  console.log(values)
})
