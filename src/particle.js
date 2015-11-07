var vector = require('./vector.js')

module.exports = function particle (_svg) {
  var pos
  var vel
  var age

  var svg = _svg
  var circle

  function init () {
    pos = vector(0, 0)
    vel = vector(0, 0)
    age = 0

    if (svg !== undefined) {
      create()
    }
  }
  init()

  function create () {
    circle = svg.append('circle').attr('cx', pos.val.x).attr('cy', pos.val.y).attr('r', 1)
  }

  function set_position (x, y) {
    pos.set(x, y)
  }

  function tick () {
    pos.add(vel)
    update_node()
    age += 1
  }

  function update_node () {
    circle.attr('cx', pos.val.x).attr('cy', pos.val.y)
  }

  return {
    init: init,
    tick: tick,
    set_position: set_position,
    get_position: function () { return pos },
    get_circle: function () { return circle }
  }
}
