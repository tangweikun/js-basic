const promise = new Promise(function(resolve, reject) {
  console.log('First')
  resolve()
  console.log('Second')
})

promise.then(function() {
  console.log('Third')
})
