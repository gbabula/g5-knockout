/**
 *
 * @module g5-knockout
 * @description knockout/browserify base app
 * @author Greg Babula
 *
 */

'use strict';

var _            = require('lodash');
var ko           = require('knockout');
var url          = require('url');
var vm           = require('vm');
var util         = require('util');
var events       = require('events');
var masterEvents = require('./events/master');
var masterModel  = require('./model/master').master;
var viewModel    = require('./viewModel/master').master;

/**
 *
 * @constructor g5Knockout
 * @param {Object} opts
 * 
 * @param {String} opts.container container id attr
 *
 */
function g5Knockout(opts) {

    var _this = this;

    this.opts = _.extend({
        container: undefined
    }, opts);

    this.instance = false;
    this.container = this.opts.container;

    //
    // TODO proper model and viewModel setup
    // 
    this.model = new masterModel(_this.opts);
    this.viewModel = new viewModel(_this.opts);

    masterEvents.EventTower.call(this);
    events.EventEmitter.call(this);

}

util.inherits(g5Knockout, events.EventEmitter);

/**
 *
 * @method init
 * @description initiates g5Knockout
 * @returns {Object} this
 *
 */
g5Knockout.prototype.init = function() {

    var _this = this;

    util.log('g5-knockout : init');

    if (!this.instance) {

        ko.applyBindings(_this.viewModel, _this.container);

        _this.emit('init', true);
        _this.instance = true;

    }

    return this;

};

exports.construct = g5Knockout;

exports.version = '0.1.0';
