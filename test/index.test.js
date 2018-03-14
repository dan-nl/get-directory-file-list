/* eslint no-undefined: off */

'use strict'

var getDirectoryFileList = require( '../src' )
var path = require( 'path' )
var tap = require( 'tap' )

tap.test( 'getDirectoryFileList invalid arguments',
  function ( t ) {
    var invalid_arguments = [
      undefined,
      true,
      {},
      [],
      24,
      ''
    ]

    invalid_arguments.forEach(
      function ( argument ) {
        t.throws(
          function () {
            getDirectoryFileList( argument )
          },
          new Error( 'directory must be a string with a length of at least 1' ),
          '[ %argument ] should throw'
            .replace( '%argument', argument )
        )
      }
    )

    t.end()
  }
)

tap.test( 'getDirectoryFileList reference a file instead of a directory',
  function ( t ) {
    var files = getDirectoryFileList( path.join( __dirname, 'fixtures', 'example', 'some.txt' ) )

    files
      .catch(
        function ( err ) {
          t.match(
            err.toString(),
            'Error: ENOTDIR: not a directory, scandir',
            'should reject with an error containing the message `Error: ENOTDIR: not a directory, scandir`'
          )

          t.end()
        }
      )
  }
)

tap.test( 'getDirectoryFileList reference a non-existing directory',
  function ( t ) {
    var files = getDirectoryFileList( path.join( __dirname, 'not-a-directory' ) )

    files
      .catch(
        function ( err ) {
          t.match(
            err.toString(),
            'Error: ENOENT: no such file or directory, scandir',
            'should reject with an error containing the message `Error: ENOENT: no such file or directory, scandir`'
          )

          t.end()
        }
      )
  }
)

tap.test( 'getDirectoryFileList valid directory',
  function ( t ) {
    var files = getDirectoryFileList( path.join( __dirname, 'fixtures', 'example' ) )
    var expected = [ '.hidden', 'another.txt', 'some.txt' ]

    files
      .then(
        function ( items ) {
          t.same(
            items,
            expected,
            'should match the expected file list `[ \'.hidden\', \'another.txt\', \'some.txt\' ]`'
          )

          t.end()
        }
      )
  }
)
