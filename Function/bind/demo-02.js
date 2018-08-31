var pokemon = {
  firstName: 'Pika',
  lastName: 'Chu ',
  getPokeName: function() {
    var fullName = this.firstName + ' ' + this.lastName
    return fullName
  },
}

var pokemonName = function(snack, hobby) {
  console.log(this.getPokeName() + 'I choose you!')
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby)
}

var logPokemon = pokemonName.bind(pokemon) // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms') // Pika Chu  loves sushi and algorithms
