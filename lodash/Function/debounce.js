// 2018-10-29
// 2018-11-26

function debounce(fn, delay) {
  let timeoutId
  return function() {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(fn.bind(this, ...arguments), delay)
  }
}

const f = debounce(function(a, b) {
  console.log(a, b)
}, 2000)

f(3, 4)
