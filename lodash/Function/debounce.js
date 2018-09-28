function debounce(fn, delay) {
  var timer
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, arguments), delay)
  }
}

const f = debounce(function(a, b) {
  console.log(a, b)
}, 2000)

f(3, 4)
