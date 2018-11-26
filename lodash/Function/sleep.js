// 2018-10-29

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))

sleep(3000).then(() => console.log('Bye'))
;(async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.")
  await sleep()
  console.log('I woke up after 1 second.')
})()
