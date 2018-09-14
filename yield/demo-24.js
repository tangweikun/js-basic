function* dataConsumer() {
  console.log('Started')
  console.log(`1. ${yield}`) // (A)
  console.log(`2. ${yield}`)
  return 'result'
}

let genObj = dataConsumer()

genObj.next()
genObj.next('a')
genObj.next('b')
