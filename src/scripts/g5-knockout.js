/**
 *
 * @module g5-knockout
 * @description Knockout/Browserify base app - MVVM with an event layer
 * @author Greg Babula
 * @version 0.1.0
 *
 */

'use strict';

var _               = require('lodash');
var ko              = require('knockout');
var url             = require('url');
var util            = require('util');
var events          = require('events');
var masterEvents    = require('./events/master');
var MasterModel     = require('./model/master').MasterModel;
var MasterViewModel = require('./viewModel/master').MasterViewModel;

/**
 *
 * @constructor G5Knockout
 * @param {Object} opts
 * 
 * @param {Element} opts.container container id attr
 * @param {String} opts.i18n localization string
 * @param {Number} opts.interval refresh rate for model
 *
 */
function G5Knockout(opts) {

    var _this = this;

    if (!(this instanceof G5Knockout)) {
        return new G5Knockout(opts);
    }

    this.opts = _.extend({
        container: document && document.getElementById('g5-knockout-app'),
        i18n: 'en'
    }, opts);

    this.instance = false;
    this.container = this.opts.container;
    this.url = url.parse(window && window.location.href) || {};

    this.model = new MasterModel(_this.opts);
    this.viewModel = new MasterViewModel(_this.opts);

    masterEvents.EventTower.call(this);
    events.EventEmitter.call(this);

    this.init();

}

util.inherits(G5Knockout, events.EventEmitter);
util.inherits(G5Knockout, masterEvents.EventTower);

/**
 *
 * @method init
 * @description instantiates G5Knockout, ensures bindings are applied once
 * @returns {Object} this
 *
 */
G5Knockout.prototype.init = function() {

    var _this = this;

    util.log('g5-knockout : init');

    // 
    // instantiate viewModel first, this way all observables
    // are ready to be mutated and/or updated on data load/refresh
    // 

    if (!this.instance) {

        this.instance = true;

        this.viewModel.init();
        this.model.init();

        ko.applyBindings(_this.viewModel, _this.container);

    }

    return this;

};

exports.version = '0.1.0';
exports.construct = G5Knockout;
