/**
 *
 * @module core/util
 * @description core utility functions
 *
 */

'use strict';

/**
 *
 * @function pad
 * @param {Number} n
 * @returns {String}
 *
 */
function pad(n) {

    return n < 10 ? '0' + n.toString(10) : n.toString(10);

}

/**
 *
 * @function timestamp
 * @description util that returns a timestamp string (same functionality as nodes util.log)
 * @returns {String}
 *
 */
function timestamp() {

    var d = new Date();

    var months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(':');

    return [d.getDate(), months[d.getMonth()], time].join(' ');

}

exports.pad = pad;
exports.timestamp = timestamp;
