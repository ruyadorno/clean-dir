#!/usr/bin/env node

'use strict';

var meow = require('meow');
var cleanDir = require('./');

var cli = meow({
  help: [
    'Usage',
    '  cleandir <input>',
    '',
    'Example',
    '  cleandir Unicorn'
  ].join('\n')
});

cleanDir(cli.input[0]);

