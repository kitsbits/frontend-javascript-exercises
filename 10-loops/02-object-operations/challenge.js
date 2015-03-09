
module.exports.copy = function(object) {
  var newObject = {};
  for (var i in object) {
    newObject[i] = object[i];
  }
  return newObject;
};

module.exports.extend = function(dest, src) {
  for (var property in src) {
    dest[property] = src[property];
  }
  return dest;
};

module.exports.hasElems = function(object, array) {
  var keys = Object.keys(object);
  //console.log(keys);
  keys.sort();
  array.sort();
  for (i = 0; i < keys.length; i++) {
    if (keys[i] !== array[i]) {
      return false;
    }
    return true;
  }

  
};