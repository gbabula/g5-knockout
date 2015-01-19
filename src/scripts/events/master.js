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

    var _this = this;

    if (!(this instanceof EventTower)) {
        return new EventTower();
    }

    util.log('EventTower');

    console.log(this);

}

exports.EventTower = EventTower;
