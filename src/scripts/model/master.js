/**
 *
 * @module model/master
 * @description 
 * @author Greg Babula
 *
 */

'use strict';

var _       = require('lodash');
var util    = require('util');
var events  = require('events');

/**
 *
 * @constructor masterModel
 * @param {Object} opts
 *
 */
function masterModel(opts) {

    this.opts = _.extend({}, opts);

    events.EventEmitter.call(this);

}

util.inherits(masterModel, events.EventEmitter);

/**
 *
 * @method update
 * @param {Object} data
 *
 */
masterModel.prototype.update = function(data) {

    this.emit('data', data);

};

//
// TODO get data, call update method with data
//

exports.master = masterModel;
