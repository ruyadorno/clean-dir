/*global describe, it, beforeEach, afterEach */
'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var cleanDir = require('../');

describe('clean-dir', function () {

  beforeEach(function () {
    fs.mkdirSync('.tmp');
    fs.writeFileSync(path.join('.tmp', 'README.md'), '');
    fs.writeFileSync(path.join('.tmp', 'package.json'), '{ name: "something" }');
    fs.writeFileSync(path.join('.tmp', '.gitignore'), '');
  });

  afterEach(function () {
    fs.rmdirSync('.tmp');
  });

  it('should clean a directory from all files on it', function () {
    assert(fs.readdirSync('.tmp').length, 3);
    cleanDir();
    assert(fs.readdirSync('.tmp').length, 0);
  });

});

