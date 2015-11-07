var p = require('./particle.js')()
console.log(p)

require('../tests/all_tests.js')
var world = require('./world.js')()

world.init()

var emitters = world.get_emitters()

world.create_emitter()

function render () {
  world.tick()
  window.requestAnimationFrame(render)
}
render()

console.log(emitters)
