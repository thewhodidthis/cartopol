/**
 * Helps convert to polar
 * @module cartopol
 * @param {Number} x - Position along the horizontal axis
 * @param {Number} y - Position along the vertical axis
 * @returns {Object} - Vector like, contains corresponding polar coordinates
 * @example
 * cartopol(1, 1);
 */
const cartopol = (x = 0, y = 0) => ({
  azimuth: Math.atan2(y, x),
  radius: Math.sqrt((x * x) + (y * y)),
})

export default cartopol
