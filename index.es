const cartopol = (x = 0, y = 0) => ({
  t: Math.atan2(y, x),
  r: Math.sqrt((x * x) + (y * y))
});

export default cartopol;
