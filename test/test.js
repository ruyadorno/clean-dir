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

  it('should clean a directory', function (done) {
    assert.equal(fs.readdirSync('.tmp').length, 3);
    cleanDir('.tmp', function () {
      assert.equal(fs.readdirSync('.tmp').length, 0);
      done();
    });
  });

  it('should do nothing if directory is already clean', function (done) {
    fs.mkdirSync('.tmp2');
    cleanDir('.tmp2', function () {
      assert(true, 'Does not throw errors');
      fs.rmdirSync('.tmp2');
      done();
    });
  });

});

