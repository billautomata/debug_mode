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

    emitters = []
  }

  function create_emitter () {
    emitters.push(emitter())
  }

  return {
    create_emitter: create_emitter,
    get_svg: function () { return svg },
    init: init
  }
}
