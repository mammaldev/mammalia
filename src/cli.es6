#!/usr/bin/env node

import mammalia from './mammalia';
import { argv } from 'yargs';

let result = mammalia({
  maxWords: argv.w,
});

console.log(result);
