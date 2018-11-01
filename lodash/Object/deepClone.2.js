// 2018-11-29

// The JSON.parse(JSON.stringify()) combination to deep copy Javascript objects is an ineffective hack,
// because JSON does not support values of undefined and function () {},
// and therefore JSON.stringify will ignore those sections of code,
// when "stringifying" (marshalling) the Javascript object into JSON.

const deepClone = obj => JSON.parse(JSON.stringify(obj))

const foo = {
  a1: null,
  a2: undefined,
  a3: { a31: 31 },
  a4: [4, [5]],
  a5: Math.floor,
}

// const foo = [1, 2, 3, [4, 5]]

const bar = deepClone(foo)
const foobar = Object.assign({}, foo)
console.log(bar)
console.log(foo.a3 === bar.a3, foo.a4 === bar.a4)
console.log(foo.a3 === foobar.a3, foo.a4 === foobar.a4)
