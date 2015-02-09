#!/usr/bin/env node

'use strict';

var meow = require('meow');
var cleanDir = require('./');

var cli = meow({
  help: [
    'Usage',
    '  cleandir           Removes all files from the current folder.',
    '  cleandir <path>    Removes all files from specified dir path.',
    '',
    'Example',
    '  cleandir'
  ].join('\n')
});

cleanDir(cli.input[0]);

