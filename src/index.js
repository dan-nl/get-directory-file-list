'use strict'

var getDirectoryList = require( './get-directory-list' )
var getDirectoryListStats = require( './get-directory-list-stats' )

/**
 * given an absolute directory path,
 * return an array of the file names within that directory path
 *
 * @param {string} directory an absolute path
 *
 * @returns {Promise}
 */
function getDirectoryFileList( directory ) {
  if ( typeof directory !== 'string' || directory.length < 1 ) {
    throw new Error( 'directory must be a string with a length of at least 1' )
  }

  return new Promise(
    /**
     * @param {Function} resolve
     * @param {Function} reject
     *
     * @returns {undefined}
     */
    function ( resolve, reject ) {
      getDirectoryList( directory )
        .then(
          function ( directory_list ) {
            return getDirectoryListStats( directory, directory_list )
          }
        )
        .then(
          function ( promises ) {
            return Promise.all( promises )
          }
        )
        .then(
          function ( directory_list_items ) {
            resolve(
              directory_list_items.reduce(
                function ( acc, directory_list_item ) {
                  if ( directory_list_item.stats.isFile() ) {
                    acc.push( directory_list_item.item )
                  }

                  return acc
                },
                []
              )
            )
          }
        )
        .catch(
          function ( err ) {
            reject( err )
          }
        )
    }
  )
}

module.exports = getDirectoryFileList
