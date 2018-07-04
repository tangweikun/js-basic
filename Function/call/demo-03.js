// Using call to invoke a function and specifying the context for 'this'

function greet() {
  const reply = [
    this.animal,
    'typically sleep between',
    this.sleepDuration,
  ].join(' ')
  console.log(reply)
}

const obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hours',
}

greet.call(obj) // cats typically sleep between 12 and 16 hours
