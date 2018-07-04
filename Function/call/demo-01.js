// Using call to chain constructors for an object

function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.call(this, name, price)
  this.category = 'FOOD'
}

function Toy(name, price) {
  Product.call(this, name, price)
  this.category = 'TOY'
}

console.log(new Food('cheese', 5).name) // cheese
console.log(new Toy('doll', 5).category) // TOY
