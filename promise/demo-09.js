function asyncFunction() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Async Hello World')
    }, 2000)
  })
}

asyncFunction().then(
  function(value) {
    console.log(value)
  },
  function(error) {
    console.error(error)
  },
)
// .catch(function(error) {
//   console.error(error)
// })
