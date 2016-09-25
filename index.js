'use strict';

module.exports = function cartopol(x, y) {
  return {
    a: Math.atan2(y, x),
    d: Math.sqrt(x * x + y * y)
  };
};
