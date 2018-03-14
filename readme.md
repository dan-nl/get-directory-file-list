# get-directory-file-list
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

a directory helper that returns a Promise containing an array of the files found in a directory ( not recursive )

## table of contents
* [installation](#installation)
* [api](#api)
* [usage](#usage)
* [license](#license)

## installation
```javascript
npm install get-directory-file-list
```

## api
```javascript
/**
 * @param {string} directory an absolute path
 * @returns {Array}
 */
 function getDirectoryFileList( directory )
```

## usage
```javascript
var getDirectoryFileList = require( 'get-directory-file-list' )
var path = require( 'path' )

getDirectoryFileList( path.join( __dirname, 'a-directory' ) )
  .then(
    function ( files ) {
      ...
    }
  )
  .catch(
    function( err ) {
      ...
    }
  )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/get-directory-file-list/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/get-directory-file-list?branch=master
[mit-license]: https://raw.githubusercontent.com/dan-nl/get-directory-file-list/master/license.txt
[npm-image]: https://img.shields.io/npm/v/get-directory-file-list.svg
[npm-url]: https://www.npmjs.com/package/get-directory-file-list
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/efe2c75e-433a-421b-8c24-b3f5b97cb693/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/efe2c75e-433a-421b-8c24-b3f5b97cb693
[travis-image]: https://travis-ci.org/dan-nl/get-directory-file-list.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/get-directory-file-list
