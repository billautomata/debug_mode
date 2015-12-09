var test = require('tape')

test('particle setup', function (t) {
  t.plan(6)

  var p = require('../src/particle.js')()

  t.ok(p.tick, 'check for tick() function')
  t.ok(p.get_position, 'check for get_position() function')
  t.ok(p.get_velocity, 'check for get_velocity() function')
  t.ok(p.set_position, 'check for set_position() function')
  t.ok(p.set_velocity, 'check for set_velocity() function')
  t.ok(p.init, 'check for init() function')
})

test('particle tick', function (t) {
  t.plan(2)

  var p = require('../src/particle.js')()
  p.set_position(0, 0)
  p.set_velocity(1, 2)
  p.tick()

  t.equals(1, p.get_position().val.x, 'check correct x value')
  t.equals(2, p.get_position().val.y, 'check correct y value')
})
