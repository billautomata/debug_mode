var test = require('tape')

test('emitter setup', function (t) {
  t.plan(2)

  var e = require('../src/emitter.js')()

  t.ok(e.tick, 'check for tick() function')
  t.ok(e.set_color, 'check for set_color() function')
})

test('particles array populated', function (t) {
  t.plan(1)

  var e = require('../src/emitter.js')()

  t.equals(100, e.get_particles().length, 'check correct x value')
})
