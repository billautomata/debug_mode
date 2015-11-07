var test = require('tape')
var d3 = require('d3')

test('world setup', function (t) {
  t.plan(1)

  var w = require('../src/world.js')()
  t.ok(w.init, 'check for init() function')
})

test('svg element added to page', function (t) {
  t.plan(4)

  var w = require('../src/world.js')()

  t.equals(w.get_svg(), undefined, 'svg is undefined before init')

  w.init()

  t.ok(w.get_svg(), 'svg is not undefined after init')

  t.equals(d3.select('body').select('svg#default').size(), 1, 'one svg is created with the default id')
  w.get_svg().remove() // cleanup

  w.init('test_id')

  t.equals(d3.select('body').select('svg#test_id').size(), 1, 'one svg is created with the correct name')
  w.get_svg().remove() // cleanup
})
