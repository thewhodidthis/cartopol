'use strict'

const { equal, ok, deepEqual, fail } = require('tapeless')
const bender = require('./')

equal(typeof bender(), 'object', 'should be equal', 'return value is of type and contains')
deepEqual(bender(0, 1), { r: 1, t: Math.PI / 2 }, 'should be equivalent')

const { r } = bender(1.5)

equal(r, Math.sqrt(2.25), 'should be equal', 'return value compares with known result')

const { t } = bender()

equal(t, 0, 'should be equal')

try {
  bender(NaN, Infinity)
  ok(true, 'should not throw', 'will not throw if misconfigured')
} catch ({ message }) {
  fail(message)
}
