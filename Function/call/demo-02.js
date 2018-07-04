// Using call to invoke an anonymous function

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' },
]

for (let i = 0; i < animals.length; i++) {
  ;(function(i, tag) {
    this.print = function() {
      console.log(tag + i + ' ' + this.species + ': ' + this.name)
    }
    this.print()
  }.call(animals[i], i, '#'))
}
