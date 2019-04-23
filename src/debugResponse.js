'use strict'

const debug = require('debug')('mqtt-resource')

module.exports = (response) => {
    if ( !response ) return

    debug(
        'Response: (%s) %s',
        response.statusCode,
        response.body ? JSON.stringify(response.body, null, 2) : '-empty body-'
    )
}
