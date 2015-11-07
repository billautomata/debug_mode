var d3 = require('d3')
var emitter = require('./emitter.js')

module.exports = function world () {
  var svg
  var emitters

  function init (worldname) {
    if (worldname === undefined) {
      worldname = 'default'
    }
    svg = d3.select('body').append('svg').attr('id', worldname)
    svg.style('background-color', 'blue')

    emitters = []
  }

  function create_emitter () {
    emitters.push(emitter(svg))
  }

  function tick () {
    emitters.forEach(function (emitter) {
      emitter.tick()
    })
  }

  return {
    create_emitter: create_emitter,
    get_svg: function () { return svg },
    get_emitters: function () { return emitters },
    init: init,
    tick: tick
  }
}
