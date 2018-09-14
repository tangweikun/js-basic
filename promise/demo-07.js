function timeout(ms = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}

timeout(3000).then(value => console.log(value))
