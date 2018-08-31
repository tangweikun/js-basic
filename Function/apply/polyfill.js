HELP: Function.prototype.myApply = function(context) {
  var context = context || window
  context.fn = this

  var result
  // There's a need to determine whether to store the second parameter
  // If the second parameter exists, spread it
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}
