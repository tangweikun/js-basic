// Ensures a function is called only once.

const once = fn => {
  let isCalled = false

  return function(...args) {
    if (isCalled) return
    isCalled = true
    return fn.apply(null, args)
  }
}

const foo = once(function(x, y) {
  console.log('Just run once', x, y)
})
foo('1', '2')
foo('2', '3')
foo('3', '4')
