module.exports = function particle () {
  var vector = require('./vector.js')

  var pos
  var vel
  var age

  function init () {
    pos = vector(0, 0)
    vel = vector(0, 0)
    age = 0
  }
  init()

  function tick () {
    pos.add(vel)
    age += 1
  }

  function get_position () {
    return pos
  }

  return {
    init: init,
    tick: tick,
    get_position: get_position
  }
}
