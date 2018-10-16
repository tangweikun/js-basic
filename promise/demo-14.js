const f = () => console.log('now')
Promise.resolve().then(f)
console.log('next')
// next
// now

const f2 = () => console.log('now--2')
;(async () => f2())()
console.log('next--2')
// now
// next

const f3 = () => console.log('now--3')
;(() => new Promise(resolve => resolve(f3())))()
console.log('next--3')
// now
// next
