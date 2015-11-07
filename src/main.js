var p = require('./particle.js')()
console.log(p)

require('../tests/all_tests.js')
var world = require('./world.js')()

world.init()
