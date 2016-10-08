'use strict';

const cartopol = require('../');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  let i = input.split(' ');
  let x = i[0];
  let y = i[1];

  console.log(cartopol(x, y));
});

