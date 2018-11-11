'use strict'

const { equal, ok, deepEqual, fail } = require('tapeless')
const bender = require('./')

equal
  .describe('should be equal')
  .test(typeof bender(), 'object')

deepEqual
  .describe('should be equivalent', 'return value is of type and contains')
  .test(bender(0, 1), { r: 1, t: Math.PI / 2 })

const { r } = bender(1.5)

equal
  .describe('should be equal', 'return value compares with known result')
  .test(r, Math.sqrt(2.25))

const { t } = bender()

equal
  .test(t, 0)
  .describe('should be equal')

try {
  bender(NaN, Infinity)
  ok
    .describe('should not throw', 'will not throw if misconfigured')
    .test(true)
} catch ({ message }) {
  fail(message)
}
