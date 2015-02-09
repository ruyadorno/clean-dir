# cleandir

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Command line util to safely clean a directory


## About

This small command line tool uses [trash][trash-url] to safely clean the current working directory or the directory specified.


## Install

```sh
$ npm install -g clean-dir
```


## Usage

### Command-line

Cleans up the current working directory:

```sh
$ cleandir
```

Cleans a given directory:

```sh
$ cleandir ~/path-to-clean
```

Displays the help message:

```sh
$ cleandir --help
```


### Programmatic API

```js
var cleandir = require('clean-dir');

cleandir('~/path-to-clean', function (err) {});
```


## License

MIT © [Ruy Adorno](http://ruyadorno.com/)

[npm-url]: https://npmjs.org/package/clean-dir
[npm-image]: https://badge.fury.io/js/clean-dir.svg
[travis-url]: https://travis-ci.org/ruyadorno/clean-dir
[travis-image]: https://travis-ci.org/ruyadorno/clean-dir.svg?branch=master
[trash-url]: https://www.npmjs.com/package/trash

