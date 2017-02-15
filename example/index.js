'use strict';

const car2pol = require('../');
const padleft = n => (`    ${n}`).slice(-4);
const toDeg = rad => (rad * 180) / Math.PI;

// Report each character
process.stdin.setRawMode(true);

// Enable mouse reporting
process.stdout.write('\x1b[?1005h');
process.stdout.write('\x1b[?1003h');

// Follow mouse
process.stdout.on('data', (chunk) => {
  const input = chunk.toString('utf-8');

  if (input === '\u0003') {
    // Done
    process.exit();
  }

  // Box size
  const w = process.stdout.columns;
  const h = process.stdout.rows;

  // Mouse coordinates
  const x = input.charCodeAt(4) - 32;
  const y = input.charCodeAt(5) - 32;

  // Center
  const position = {
    x: x - w * 0.5,
    y: y - h * 0.5,
  };

  const result = car2pol(position.x, position.y);
  const data = Object.assign(position, result, { t: toDeg(result.t) });
  const output = JSON.stringify(data);

  // Progress report
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(output);
});

process.on('exit', () => {
  // Turn off mouse reporting
  process.stdout.write('\x1b[?1005l');
  process.stdout.write('\x1b[?1003l');

  // Quit on a new line
  process.stdout.write('\n');
});

