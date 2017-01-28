const test = require('tape');
const cartopol = require('../');

test('return value is of type and contains', (t) => {
  t.plan(2);

  t.equal(typeof cartopol(), 'object');
  t.deepEqual(cartopol(0, 1), { r: 1, theta: Math.PI / 2 });
});

test('return value compares with known result', (t) => {
  t.plan(2);

  t.equals(cartopol().theta, 0);
  t.equals(cartopol(1.5).r, Math.sqrt(2.25));
});

