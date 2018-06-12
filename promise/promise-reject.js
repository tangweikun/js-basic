function resolved() {
  console.log('RESOLVED')
}

function rejected() {
  console.log('REJECTED')
}

Promise.reject(new Error('fail')).then(resolved, rejected)
