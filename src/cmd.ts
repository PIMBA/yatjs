#!/usr/bin/env node

import fs from 'fs';
import { resolve } from 'path';
import interpret from '.';

const cwd = process.cwd();

const filename = resolve(cwd, process.argv[2]);

const res = interpret(fs.readFileSync(filename, 'UTF-8'));

console.log(res);