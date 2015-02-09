'use strict';

var readdir = require('fs').readdir;
var pathJoin = require('path').join;

var waterfall = require('async').waterfall;
var trash = require('trash');

module.exports = function (dir, callback) {

  dir = dir || '.';

  waterfall([
    function (cb) { readdir(dir, cb); },
    function (files, cb) {
      if (files.length === 0) {
        cb();
      } else {
        trash(files.map(function (file) { return pathJoin(dir, file); }), cb);
      }
    }
  ], callback);

};

