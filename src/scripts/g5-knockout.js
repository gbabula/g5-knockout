/**
 *
 * @module g5-knockout
 * @description Knockout/Browserify base app - MVVM with an event layer
 * @author Greg Babula
 * @version 0.1.3
 *
 */

'use strict';

var _               = require('lodash');
var ko              = require('knockout');
var url             = require('url');
var util            = require('util');
var MasterModel     = require('./model/master').MasterModel;
var MasterViewModel = require('./viewModel/master').MasterViewModel;
var EventEmitter    = require('events').EventEmitter;
var EventTower      = require('./events/master').EventTower;

/**
 *
 * @constructor G5Knockout
 * @param {Object} opts
 * 
 * @param {Element} opts.container container id attr
 * @param {String} opts.i18n localization string
 * @param {Number} opts.interval refresh rate for model data
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

    EventEmitter.call(this);
    EventTower.call(this);

    return this;

}

util.inherits(G5Knockout, EventEmitter);
util.inherits(G5Knockout, EventTower);

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

/**
 *
 * @method display
 * @param {Boolean|String} isVisible
 * @description toggles visibility of main container
 * @example this.display(false); or this.display('false');
 * @returns {Object} this
 *
 */
G5Knockout.prototype.display = function(isVisible) {

    this.viewModel.isContainerVisible(isVisible);

    return this;

};

/**
 *
 * @method off
 * @description detaches all events
 * @returns {Object} this
 *
 */
G5Knockout.prototype.off = function() {

    this.detachEvents();

    return this;

};

/**
 *
 * @method on
 * @description attaches all events
 * @returns {Object} this
 *
 */
G5Knockout.prototype.on = function() {

    this.attachEvents();

    return this;

};

/**
 *
 * @method destroy
 * @description removes container element and destroys instance
 * @returns {Object} this
 *
 */
G5Knockout.prototype.destroy = function() {

    if (this.instance) {

        this.off();

        this.model = {};
        this.viewModel = {};

        this.container.outerHTML = '';
        this.container = null;

        this.instance = false;

    }

    return this;

};

exports.VERSION = '0.1.3';
exports.construct = G5Knockout;
