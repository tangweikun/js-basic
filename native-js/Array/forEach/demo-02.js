// If the array is modified during iteration, other elements might be skipped

const words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift()
  }
})

// one
// two
// four
