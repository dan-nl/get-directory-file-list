'use strict'

var fs = require( 'fs' )

/**
 * @param {string} directory
 *
 * @returns {Promise}
 */
function getDirectoryList( directory ) {
  return new Promise(
    /**
     * @param {Function} resolve
     * @param {Function} reject
     *
     * @returns {undefined}
     */
    function ( resolve, reject ) {
      fs.readdir(
        directory,
        /**
         * @param {Error} err
         * @param {Array} directory_list
         *
         * @returns {undefined}
         */
        function ( err, directory_list ) {
          if ( err ) {
            reject( err )
          }

          resolve( directory_list )
        }
      )
    }
  )
}

module.exports = getDirectoryList
