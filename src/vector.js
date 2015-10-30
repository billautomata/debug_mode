module.exports = function vector (ox, oy) {
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
  }

  function addv (o) {
    return add(o.val.x, o.val.y)
  }

  function mult(s){
    val.x *= s
    val.y *= s
  }

  function distance (ox, oy) {
    return Math.sqrt(Math.pow(ox - val.x, 2) + Math.pow(oy - val.y, 2))
  }
  function distancev (o) {
    return distance(o.val.x, o.val.y)
  }

  /*

  function normalize(){}  // sets the length to 1
  function clamp(x){}      // clamps the length of the vector to x

  */

  return {
    val: val,
    set: set,
    add: add,
    addv: addv,
    distance: distance,
    distancev: distancev
  }
}
