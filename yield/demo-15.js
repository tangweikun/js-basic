// 使用 for...of 语句时不需要使用 next 方法

function* fibonacci() {
  let [prev, curr] = [0, 1]
  for (;;) {
    yield curr
    ;[prev, curr] = [curr, prev + curr]
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break
  console.log(n)
}
