function _LazyMan(name) {
  this.tasks = []
  const self = this
  const fn = (function(innerName) {
    return function() {
      console.log('Hi! This is ' + innerName + '!')
      self.next()
    }
  })(name)
  this.tasks.push(fn)
  setTimeout(function() {
    self.next()
  }, 0) // 在下一个事件循环启动任务
}

/* 事件调度函数 */
_LazyMan.prototype.next = function() {
  var fn = this.tasks.shift()
  fn && fn()
}

_LazyMan.prototype.eat = function(name) {
  const self = this
  const fn = (function(innerName) {
    return function() {
      console.log('Eat ' + innerName + '~')
      self.next()
    }
  })(name)
  this.tasks.push(fn)
  return this // 实现链式调用
}

_LazyMan.prototype.sleep = function(time) {
  const self = this
  const fn = (function(time) {
    return function() {
      setTimeout(function() {
        console.log('Wake up after ' + time + 's!')
        self.next()
      }, time * 1000)
    }
  })(time)
  this.tasks.push(fn)
  return this
}

_LazyMan.prototype.sleepFirst = function(time) {
  var self = this
  var fn = (function(time) {
    return function() {
      setTimeout(function() {
        console.log('Wake up after ' + time + 's!')
        self.next()
      }, time * 1000)
    }
  })(time)
  this.tasks.unshift(fn)
  return this
}

/* 封装 */
function lazyMan(name) {
  return new _LazyMan(name)
}

// Hi! This is Hank!
lazyMan('Hank')

// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~
lazyMan('Hank')
  .sleep(1)
  .eat('dinner')

// Hi This is Hank!
// Eat dinner~
// Eat supper~
lazyMan('Hank')
  .eat('dinner')
  .eat('supper')

// 等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
lazyMan('Hank')
  .sleepFirst(2)
  .eat('supper')
