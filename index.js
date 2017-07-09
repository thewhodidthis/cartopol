'use strict';

/**
 * Helps convert to polar
 * @module cartopol
 * @param {Number} x - Across
 * @param {Number} y - Up or down
 * @returns {Object} - Vector like
 * @example
 * cartopol(1, 1);
 */
var cartopol = function (x, y) {
  if ( x === void 0 ) x = 0;
  if ( y === void 0 ) y = 0;

  return ({
  t: Math.atan2(y, x),
  r: Math.sqrt((x * x) + (y * y))
});
};

module.exports = cartopol;

