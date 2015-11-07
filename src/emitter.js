// var vector = require('./vector.js')
var particle = require('./particle.js')

module.exports = function emitter () {
  var host
  var particles
  var params

  function init () {
    host = particle()
    particles = []

    params = {}
    params.min_particles = 4
    params.max_particles = 10
  }
  init()

  function tick () {
    if (particles.length < params.min_particles) {
      particles.push(particle())
    }
  }

  return {
    tick: tick,
    get_params: function () { return params },
    get_host: function () { return host }
  }
}
