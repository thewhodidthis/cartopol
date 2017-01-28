export default function cartopol(x = 0, y = 0) {
  return {
    theta: Math.atan2(y, x),
    r: Math.sqrt((x * x) + (y * y))
  };
}

