/**
 *
 * @module events/master
 * @description
 * @author Greg Babula
 *
 */

'use strict';

var util = require('util');

/**
 *
 * @constructor EventTower
 *
 */
function EventTower() {

    if (!(this instanceof EventTower)) {
        return new EventTower();
    }

    console.log(this);

}

exports.EventTower = EventTower;
