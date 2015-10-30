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
  t.equals(v.val.x, 1.1, 'x value is added')
  t.equals(v.val.y, 0.3, 'y value is added')
})

test('vector addv', function (t) {
  t.plan(2)

  var v = vector(0, 0)

  v.addv(vector(1.1, 0.3))
  t.equals(v.val.x, 1.1, 'x value is added')
  t.equals(v.val.y, 0.3, 'y value is added')
})

test('vector set', function (t) {
  t.plan(2)

  var v = vector(0, 0)

  v.set(0.1, 0.03)
  t.equals(v.val.x, 0.1, 'x value is set')
  t.equals(v.val.y, 0.03, 'y value is set')
})

test('distance', function (t) {
  t.plan(4)

  var v = vector(1, 0)

  t.equals(v.distance(0, 0), 1, 'from 1,0 > 0,0')

  v.set(1, 1)
  t.equals(v.distance(0, 0), Math.sqrt(2), 'from 1,1 > 0,0')

  v.set(0, 1)
  t.equals(v.distance(0, 0), 1, 'from 0,1 > 0,0')

  v.set(1, 1)
  t.equals(v.distance(1, 1), 0, 'from 1,1 > 1,1')
})
