// var entry = {
//   a: {
//     b: {
//       c: {
//         dd: 'abcdd'
//       }
//     },
//     d: {
//       xx: 'adxx'
//     },
//     e: 'ae'
//   }
// }

// // 要求转换成如下对象
// var output = {
//   'a.b.c.dd': 'abcdd',
//   'a.d.xx': 'adxx',
//   'a.e': 'ae'
// }

function foo(obj) {
  let res = {};

  return Object.assign(res, dfs('', obj));

  function dfs(prefix, obj) {
    const tmp = {};
    if (obj && typeof obj === 'object') {
      for (let key of Object.keys(obj)) {
        Object.assign(tmp, dfs(prefix + '.' + key, obj[key]));
      }
      return tmp;
    }

    return { [prefix.replace(/^\./, '')]: obj };
  }
}

function bar(obj) {
  let res = {};
  for (let key of Object.keys(obj)) {
    const keyArr = key.split('.');
    let cur = res;
    for (let k of keyArr.slice(0, -1)) {
      if (!cur[k]) {
        cur[k] = {};
      }
      cur = cur[k];
    }
    cur[keyArr[keyArr.length - 1]] = obj[key];
  }

  return res;
}
