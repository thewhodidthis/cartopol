'use strict';

module.exports = function cartopol(x, y) {
  var x = parseInt(x, 10) || 0;
  var y = parseInt(y, 10) || x;

  return {
    a: Math.atan2(y, x),
    d: Math.sqrt(x * x + y * y)
  };
};
