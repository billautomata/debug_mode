var test = require('tape')

test('particle setup', function (t) {
  t.plan(3)

  var p = require('../src/particle.js')()

  t.ok(p.tick, 'check for tick() function')
  t.ok(p.get_position, 'check for get_position() function')
  t.ok(p.init, 'check for init() function')
})
