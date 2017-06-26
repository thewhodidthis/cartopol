/**
 * Helps convert to polar
 * @module cartopol
 * @param {Number} x - Across
 * @param {Number} y - Up or down
 * @returns {Object} - Vector like
 * @example
 * cartopol(1, 1);
 */
const cartopol = (x = 0, y = 0) => ({
  t: Math.atan2(y, x),
  r: Math.sqrt((x * x) + (y * y)),
});

export default cartopol;

