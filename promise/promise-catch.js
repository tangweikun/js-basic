var p1 = new Promise(function(resolve, reject) {
  throw 'Uh-oh'
})

p1.catch(error => {
  console.log(error)
})
