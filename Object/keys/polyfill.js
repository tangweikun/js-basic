Object.myKeys = function(obj) {
  if ((typeof obj !== 'object' && typeof obj !== 'function') || obj === null) {
    throw TypeError('Object.keys called on non-object')
  }

  let keys = []
  for (let key in obj) {
    obj.hasOwnProperty(key) && keys.push(key)
  }

  return keys
}
