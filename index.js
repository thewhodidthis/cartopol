'use strict';

/**
 * Helps convert to polar
 * @module cartopol
 * @param {Number} x - Position along the horizontal axis
 * @param {Number} y - Position along the vertical axis
 * @returns {Object} - Vector like, contains corresponding polar coordinates
 * @example
 * cartopol(1, 1);
 */
var cartopol = function (x, y) {
  if ( x === void 0 ) x = 0;
  if ( y === void 0 ) y = 0;

  return ({
  azimuth: Math.atan2(y, x),
  radius: Math.sqrt((x * x) + (y * y))
});
};

module.exports = cartopol;
