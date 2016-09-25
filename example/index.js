'use strict';

const cartopol = require('../');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  let i = input.split(' ');
  let x = parseInt(i[0]);
  let y = parseInt(i[1]) || x;

  console.log(cartopol(x, y));
});

