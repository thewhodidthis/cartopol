'use strict'

const test = require('tape')
const car2pol = require('./')

test('return value is of type and contains', (t) => {
  t.plan(2)

  t.equal(typeof car2pol(), 'object')
  t.deepEqual(car2pol(0, 1), { r: 1, t: Math.PI / 2 })
})

test('return value compares with known result', (t) => {
  t.plan(2)

  t.equals(car2pol(1.5).r, Math.sqrt(2.25))
  t.equals(car2pol().t, 0)
})

test('will not throw if misconfigured', (t) => {
  try {
    car2pol(NaN, Infinity)
    t.pass('should not throw')
  } catch (e) {
    t.fail()
  }

  t.end()
})
