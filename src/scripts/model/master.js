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
var http          = require('http');
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
 * @description initiates master model, begins initial data fetch
 * @returns {Object} this
 *
 */
MasterModel.prototype.init = function() {

    if (!this.instance) {

        this.instance = true;
        this.fetch();

    }

    return this;

};

/**
 *
 * @method fetch
 * @param {Object} opts options Object passed to request
 * @description makes a GET request to specified path, emits data event, expecting JSON by default
 * @todo implement polling, cleanup
 * @returns {Object} this
 *
 */
MasterModel.prototype.fetch = function(opts) {

    var _this = this;

    var options = _.extend({
        interval: undefined,
        path: '/src/data/demo-app.json'
    }, this.opts, opts);

    util.log('g5-knockout : fetch master model data');

    /**
     *
     * @method get
     * @param {Object} options
     * @param {Function} callback
     *
     */
    http.get(options, function(res) {

        if (res.statusCode === 404) {
            _this.emit('data-error', 404);
        }

        /**
         *
         * @event data
         * @param {Object} buf
         *
         */
        res.on('data', function(buf) {

            var _data = JSON.parse(buf);

            _this.dataCache = _data;
            _this.emit('data', _data);

        });

        /**
         *
         * @event error
         * @param {Object} err
         *
         */
        res.on('error', function(err) {

            _this.emit('data-error', err);

        });

    });

    return this;

};

exports.MasterModel = MasterModel;
