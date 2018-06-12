function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('RESOLVED')
    }, 2000)
  })
}

async function asyncCall() {
  console.log('calling')
  var result = await resolveAfter2Seconds()
  console.log(result)
}

// calling
// RESOLVED
asyncCall()
