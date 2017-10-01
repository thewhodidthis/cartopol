'use strict'

const car2pol = require('./')

const toDeg = rad => (rad * 180) / Math.PI
const roundTo = n => n.toFixed(2)

const { stdout, stdin } = process

// Print labels
'x,y,angle,distance'.split(',').forEach((tab) => {
  stdout.write(`${tab}\t`)
})

// Report each character
stdin.setRawMode(true)

// Enable mouse reporting
stdout.write('\x1b[?1005h')
stdout.write('\x1b[?1003h')

// Start fresh
stdout.write('\n')

// Follow mouse
stdout.on('data', (chunk) => {
  const input = chunk.toString('utf-8')

  // Ctrl+c
  if (input === '\u0003') {
    // Done
    process.exit()
  }

  // Box size
  const { columns: w, rows: h } = stdout

  // Screen middle
  const center = {
    x: Math.floor(w * 0.5),
    y: Math.floor(h * 0.5)
  }

  // Mouse coordinates
  const mouse = {
    x: input.charCodeAt(4) - 32,
    y: input.charCodeAt(5) - 32
  }

  // From center
  const car = {
    x: mouse.x - center.x,
    y: mouse.y - center.y
  }

  // Convert
  const pol = car2pol(car.x, car.y)
  const deg = { t: toDeg(pol.t) }

  // Merge and stringify
  const res = Object.assign({}, car, pol, deg)
  const out = Object.keys(res).map(k => roundTo(res[k])).reduce((acc, val) => `${acc}\t${val}`)

  // Same line print out
  stdout.clearLine()
  stdout.cursorTo(0)
  stdout.write(out)
})

process.on('exit', () => {
  // Turn off mouse reporting
  stdout.write('\x1b[?1005l')
  stdout.write('\x1b[?1003l')

  // To be safe
  stdout.write('\n')
})
