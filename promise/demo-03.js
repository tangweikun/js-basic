var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'p1_delayed_resolvement')
})

var p2 = new Promise((resolve, reject) => {
  reject(new Error('error'))
})

Promise.all([p1.catch(error => error), p2.catch(error => error)]).then(
  values => {
    console.log(values)
  },
)
