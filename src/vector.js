module.exports = function (ox, oy) {
  var val = { x: 0, y: 0 }

  function set (ox, oy) {
    val.x = ox
    val.y = oy
  }
  if (ox !== undefined && oy !== undefined) {
    set(ox, oy)
  }

  function add (ox, oy) {
    val.x += ox
    val.y += oy
    console.log('add called')
    console.log(val.x, val.y)
  }

  function distance (o) {
    return 1
  }

  return {
    val: val,
    set: set,
    add: add,
    distance: distance
  }
}
