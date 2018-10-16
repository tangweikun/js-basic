const thenable = {
  then(resolve, reject) {
    reject('出错了')
  },
}

Promise.reject(thenable).catch(e => {
  console.log(e === thenable)
})
// true
