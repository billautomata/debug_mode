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

test('vector distance', function (t) {
  t.plan(5)

  var v = vector(1, 0)

  t.equals(v.distance(0, 0), 1, 'from 1,0 > 0,0')

  v.set(1, 1)
  t.equals(v.distance(0, 0), Math.sqrt(2), 'from 1,1 > 0,0')

  v.set(0, 1)
  t.equals(v.distance(0, 0), 1, 'from 0,1 > 0,0')

  v.set(1, 1)
  t.equals(v.distance(1, 1), 0, 'from 1,1 > 1,1')

  v.set(-1, -1)
  t.equals(v.distance(0, 0), Math.sqrt(2), 'from -1,-1 > 0,0')
})

test('vector multiply', function (t) {
  t.plan(6)

  var v = vector(1, 0)
  v.mult(2)

  t.equals(v.val.x, 2, 'x value is correct')
  t.equals(v.val.y, 0, 'y value is correct')

  v.set(2, -4)
  v.mult(3)
  t.equals(v.val.x, 6, 'x value is correct when multiplied by a positive number')
  t.equals(v.val.y, -12, 'y value is correct when multiplied by a positive number')

  v.mult(0)
  t.equals(v.val.x, 0, 'x value is correct when multiplied by zero')
  t.equals(v.val.y, 0, 'y value is correct when multiplied by zero')
})

test('vector normalize', function (t) {
  t.plan(4)

  var v = vector(2, 1)
  v.normalize()

  // because floating point variables are awful
  // 0.9999999999999999999 does equal 1 but not in computers
  var epsilon = 0.00001

  t.equals((Math.abs(v.distance(0, 0)) - 1) < epsilon, true, 'length is near one for vector in quadrant one')

  v.set(2, -1)
  v.normalize()
  t.equals((Math.abs(v.distance(0, 0)) - 1) < epsilon, true, 'length is near one for vector in quadrant two')

  v.set(-2, -1)
  v.normalize()
  t.equals((Math.abs(v.distance(0, 0)) - 1) < epsilon, true, 'length is near one for vector in quadrant three')

  v.set(-2, 1)
  v.normalize()
  t.equals((Math.abs(v.distance(0, 0)) - 1) < epsilon, true, 'length is near one for vector in quadrant four')
})

test('vector clamp', function (t) {
  t.plan(2)

  var v = vector(1, 0)

  v.clamp(0.1)
  t.equals(v.val.x, 0.1, 'clamps the length of the vector correctly')

  v.set(1, 0)
  v.clamp(100)
  t.equal(v.val.x, 1, 'ignores vectors smaller than the clamp value')
})
