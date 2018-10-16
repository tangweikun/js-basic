let thenable = {
  then: function(resolve, reject) {
    resolve(42)
  },
}

Promise.resolve(thenable).then(function(value) {
  console.log(value) // 42
})
