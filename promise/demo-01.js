const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('Success')
  }, 500)
})

myFirstPromise.then(successMessage => {
  console.log('Yay!' + successMessage)
})
