Promise.resolve()
  .catch(function(error) {
    console.log('oh no', error)
  })
  .then(function() {
    console.log('carry on')
  })
