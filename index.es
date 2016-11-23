export default function cartopol(x, y) {
  var x = parseFloat(x) || 0;
  var y = parseFloat(y) || 0;

  return {
    theta: Math.atan2(y, x),
    r: Math.sqrt(x * x + y * y)
  };
};

