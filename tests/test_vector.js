var test = require('tape')
var vector = require('../src/vector.js')

test('vector setup', function (t) {
  t.plan(3)

  var v = vector(0, 0)

  t.ok(v.set, 'check for set() function')
  t.true(v.val.x !== undefined, 'check for x variable')
  t.true(v.val.y !== undefined, 'check for y variable')
})

test('vector add', function (t) {
  t.plan(2)

  var v = vector(0, 0)

  v.add(1.1, 0.3)

  console.log(v)
  window.k = v
  t.equals(v.val.x, 1.1, 'x value is added')
  t.equals(v.val.y, 0.3, 'y value is added')
})
