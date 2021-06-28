import bender from './main.js'
import { report, assert } from 'tapeless'

const { equal, ok } = assert

equal
  .describe('should be equal')
  .test(typeof bender(), 'object')

equal
  .describe('should be equivalent', 'return value is of type and contains')
  .test(JSON.stringify(bender(0, 1)), JSON.stringify({ azimuth: Math.PI / 2, radius: 1 }))

const { radius: r } = bender(1.5)

equal
  .describe('should be equal', 'return value compares with known result')
  .test(r, Math.sqrt(2.25))

const { azimuth: t } = bender()

equal
  .test(t, 0)
  .describe('should be equal')

try {
  bender(NaN, Infinity)
  ok
    .describe('should not throw', 'will not throw if misconfigured')
    .test(true)
} catch (e) {
  throw e
}

report()
