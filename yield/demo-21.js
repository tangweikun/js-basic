function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* iterTree(tree[i])
    }
  } else {
    yield tree
  }
}

function foo(tree) {
  let res = []
  for (let x of iterTree(tree)) {
    res.push(x)
  }
  return res
}

const tree = ['a', ['b', 'c'], ['d', 'e']]

console.log(foo(tree))
