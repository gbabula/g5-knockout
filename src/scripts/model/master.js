/**
 *
 * @module model/master
 * @description master model
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
 * @returns {Object} this
 *
 */
MasterModel.prototype.init = function() {

    this.fetch();

    return this;

};

/**
 *
 * @method fetch
 * @returns {Object} this
 *
 */
MasterModel.prototype.fetch = function() {

    var data = {};

    util.log('TODO fetch data and call update method');

    // this.update(data);
    this.emit('data', data);

    return this;

};

/**
 *
 * @method update
 * @param {Object} data
 * @returns {Object} this
 *
 */
MasterModel.prototype.update = function(data) {

    // update stored data

    return this;

};

exports.MasterModel = MasterModel;
