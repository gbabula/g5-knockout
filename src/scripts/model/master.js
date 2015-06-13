/**
 *
 * @module model/master
 * @description master model
 * @author Greg Babula
 *
 */

'use strict';

const _             = require('lodash');
const util          = require('util');
const http          = require('http');
const EventEmitter  = require('events').EventEmitter;

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
        interval: 40000,
        enablePolling: true,
        path: ''
    }, opts);

    this.instance = false;
    this.dataCache = {};
    this.dataFetch = null;

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
 * @description makes a GET request to specified path, emits data event, expecting JSON by default
 * @returns {Object} this
 *
 */
MasterModel.prototype.fetch = function() {

    let _this = this;
    let _opts = this.opts;

    util.log('g5-knockout : fetch master model data');

    /**
     *
     * @method get
     * @param {Object} options
     * @param {Function} callback
     *
     */
    http.get(_opts, function(res) {

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

            let _data = JSON.parse(buf);

            //
            // emit data event and update cache only if the data has changed since last fetch
            //
            if (!_.isEqual(_data, _this.dataCache)) {

                _this.emit('data', _data);
                _this.dataCache = _data;

            }

            _this.dataFetch = _opts.enablePolling && setTimeout(_this.fetch.bind(_this), _opts.interval);

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

/**
 *
 * @method start
 * @returns {Object} this
 * @description initiates data polling
 *
 */
MasterModel.prototype.start = function() {

    this.dataFetch = !this.dataFetch && setTimeout(this.fetch, this.opts.interval);

    return this;

};

/**
 *
 * @method stop
 * @returns {Object} this
 * @description halts data polling
 *
 */
MasterModel.prototype.stop = function() {

    if (this.dataFetch) {
        clearTimeout(this.dataFetch);
    }

    return this;

};

exports.MasterModel = MasterModel;
