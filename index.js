'use strict';

/**
 * Helps convert to polar
 * @module cartopol
 * @param {Number} x - Across
 * @param {Number} y - Up or down
 * @returns {Object} - Vector
 * @example
 * cartopol(1, 1);
 */
var cartopol = function cartopol() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    t: Math.atan2(y, x),
    r: Math.sqrt(x * x + y * y)
  };
};

module.exports = cartopol;
