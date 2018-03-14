'use strict'

var fs = require( 'fs' )
var path = require( 'path' )

/**
 * @param {string} directory
 * @param {array} directory_list
 *
 * @returns {Array.<Promise>}
 */
function getDirectoryListStats( directory, directory_list ) {
  return directory_list.map(
    function ( item ) {
      return new Promise(
        /**
         * @param {Function} resolve
         * @param {Function} reject
         *
         * @returns {undefined}
         */
        function ( resolve, reject ) {
          fs.stat(
            path.join( directory, item ),
            /**
             * @param {Error} err
             * @param {Object} stats
             *
             * @returns {undefined}
             */
            function ( err, stats ) {
              if ( err ) {
                reject( err )
              }

              resolve(
                {
                  item: item,
                  stats: stats
                }
              )
            }
          )
        }
      )
    }
  )
}

module.exports = getDirectoryListStats
