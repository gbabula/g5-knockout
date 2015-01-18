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
 * @constructor MasterModel
 * @param {Object} opts
 *
 */
function MasterModel(opts) {

    if (!(this instanceof MasterModel)) {
        return new MasterModel(opts);
    }

    this.opts = _.extend({
        interval: 40000
    }, opts);

    events.EventEmitter.call(this);

}

util.inherits(MasterModel, events.EventEmitter);

/**
 *
 * @method init
 *
 */
MasterModel.prototype.init = function() {

    this.fetch();

};

/**
 *
 * @method fetch
 *
 */
MasterModel.prototype.fetch = function() {

    util.log('TODO fetch data and call update method');

};

/**
 *
 * @method update
 * @param {Object} data
 *
 */
MasterModel.prototype.update = function(data) {

    this.emit('data', data);

};

exports.MasterModel = MasterModel;
