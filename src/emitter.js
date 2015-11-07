// var vector = require('./vector.js')
var particle = require('./particle.js')

module.exports = function emitter (_svg) {
  var host
  var particles
  var params

  var svg = _svg

  function init () {
    host = particle()

    host.set_position(svg.params.size_x * 0.5, svg.params.size_y * 0.5)

    particles = []

    params = {}
    params.min_particles = 4
    params.max_particles = 10
  }
  init()

  function tick () {
    while (particles.length < params.min_particles) {
      particles.push(particle(svg))
      particles[particles.length - 1].set_position(host.get_position().val.x, host.get_position().val.y)
    }
    particles.forEach(function (p) {
      p.tick()
    })
  }

  return {
    tick: tick,
    get_particles: function () { return particles },
    get_params: function () { return params },
    get_host: function () { return host }
  }
}
