'use strict'

const { equal, ok, deepEqual, fail } = require('tapeless')
const car2pol = require('./')

equal(typeof car2pol(), 'object', 'should be equal', 'return value is of type and contains')
deepEqual(car2pol(0, 1), { r: 1, t: Math.PI / 2 }, 'should be equivalent')

const { r } = car2pol(1.5)

equal(r, Math.sqrt(2.25), 'should be equal', 'return value compares with known result')

const { t } = car2pol()

equal(t, 0, 'should be equal')

try {
  car2pol(NaN, Infinity)
  ok(true, 'should not throw', 'will not throw if misconfigured')
} catch ({ message }) {
  fail(message)
}
