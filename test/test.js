/*global describe, it, beforeEach, afterEach */
'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var cleanDir = require('../');


// ---


describe('clean-dir', function () {

  // Defines some test file names to be used on tests
  var files = [
    path.join('.tmp', 'README.md'),
    path.join('.tmp', 'package.json'),
    path.join('.tmp', '.gitignore')
  ];

  beforeEach(function () {

    // creates a .tmp folder
    fs.mkdirSync('.tmp');

    // writes some test files
    files.forEach(function (filename) {
      fs.writeFileSync(filename, '');
    });
  });

  afterEach(function () {
    fs.rmdirSync('.tmp');
  });


  // ---


  it('should clean a directory', function (done) {
    assert.equal(fs.readdirSync('.tmp').length, 3);
    cleanDir('.tmp', function () {
      assert.equal(fs.readdirSync('.tmp').length, 0);
      done();
    });
  });

  it('should do nothing if directory is already clean', function (done) {

    // cleans up .tmp folder
    files.forEach(function (filename) {
      fs.unlinkSync(filename);
    });

    // tests an empty folder
    cleanDir('.tmp', function () {
      assert(true, 'Does not throw errors');
      done();
    });
  });

});

