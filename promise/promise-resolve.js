var p1 = Promise.resolve([1, 2, 3])

p1.then(value => {
  console.log(value)
})

Promise.resolve('Success').then(
  value => {
    console.log(value)
  },
  error => {},
)

var original = Promise.resolve(33)
var cast = Promise.resolve(original)
cast.then(function(value) {
  console.log(value)
})
