var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one')
})

var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two')
})

var p3 = new Promise((resolve, reject) => {
  reject('reject')
})

// reject
Promise.all([p1, p2, p3]).then(
  values => {
    console.log(values)
  },
  reason => {
    console.log(reason)
  },
)

// reject
Promise.all([p1, p2, p3])
  .then(values => {
    console.log(values)
  })
  .catch(reason => {
    console.log(reason)
  })
