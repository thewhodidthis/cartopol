'use strict';

var cartopol = function cartopol() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    t: Math.atan2(y, x),
    r: Math.sqrt(x * x + y * y)
  };
};

module.exports = cartopol;
