/**
 *
 * @module model/master
 * @description master model
 * @author Greg Babula
 *
 */

'use strict';

var _             = require('lodash');
var util          = require('util');
var coreUtil      = require('../core/util');
var EventEmitter  = require('events').EventEmitter;

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

    this.instance = false;
    this.dataCache = {};

    EventEmitter.call(this);

}

util.inherits(MasterModel, EventEmitter);

/**
 *
 * @method init
 * @description initiates master model, begins data fetch
 * @returns {Object} this
 *
 */
MasterModel.prototype.init = function() {

    this.fetch();
    this.instance = true;

    return this;

};

/**
 *
 * @method fetch
 * @param {Number} interval
 * @returns {Object} this
 * @todo add polling, fetch data from server
 *
 */
MasterModel.prototype.fetch = function(interval) {

    interval = interval || this.opts.interval;

    //
    // sample data Object, TODO fetch some real server data here
    // emit data event on success
    // 
    var data = {
        time: coreUtil.timestamp(),
        refreshRate: interval,
        collection: [
            {
                title: 'chunk example'
            },
            {
                title: 'chunk example 2'
            },
            {
                title: 'chunk example 3'
            }
        ]
    };

    util.log('g5-knockout : fetch master model data');

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

    //
    // update cached data
    //

    return this;

};

exports.MasterModel = MasterModel;
