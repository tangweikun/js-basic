// 借用别的对象的方法

var Person1 = function() {
  this.name = 'linxin'
}
var Person2 = function() {
  this.getname = function() {
    console.log(this.name)
  }
  Person1.call(this)
}
var person = new Person2()
person.getname() // linxin
