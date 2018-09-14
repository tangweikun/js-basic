// Distinguishing between objects and primitives
function isObject(x) {
  return typeof x === 'function' || (typeof x === 'object' && x !== null)
}

function isObjectPro(x) {
  return x === Object(x)
}
