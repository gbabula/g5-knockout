/**
 *
 * @module viewModel/master
 * @description master viewModel
 * @author Greg Babula
 *
 */

'use strict';

var _             = require('lodash');
var ko            = require('knockout');
var util          = require('util');
var EventEmitter  = require('events').EventEmitter;

/**
 *
 * @constructor MasterViewModel
 * @param {Object} opts
 *
 * @param {String} opts.css classes added to main container
 * @param {Element} opts.container
 *
 */
function MasterViewModel(opts) {

    if (!(this instanceof MasterViewModel)) {
        return new MasterViewModel(opts);
    }

    this.opts = _.extend({
        css: 'g5-knockout-app g5-knockout-bound',
        container: undefined
    }, opts);

    this.instance = false;
    this.active = false;

    //
    // storing all observables under a parent Object
    // this will help keep the viewModel clean, and help maintain
    // a clear separation between properties and observables
    //
    this.$data = {};

    //
    // used internally to determine if knockout
    // bindings have been correctly applied
    //
    this.koBound = false;

    EventEmitter.call(this);

}

util.inherits(MasterViewModel, EventEmitter);

/**
 *
 * @method init
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.init = function() {

    if (!this.instance) {

        this.instance = true;
        this.active = true;

        //
        // core observables
        //
        this.addG5Observables().addObservables();

    }

    return this;

};

/**
 *
 * @method addG5Observables
 * @description adds core observables provided by g5-knockout module
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.addG5Observables = function() {

    var _this = this;

    util.log('g5-knockout : add core viewModel observables');

    _this.$data.css = ko.observable(_this.opts.css);
    _this.$data.g5knockout_instance = ko.observable(_this.instance);
    _this.$data.g5knockout_visible = ko.observable(_this.active);
    _this.$data.g5knockout_bound = ko.observable(!!_this.$data.g5knockout_instance());

    //
    // keeping this attr Object in the viewModel to keep markup clean
    //
    _this.$data.g5knockout_attr = {
        'class': _this.$data.css,
        'data-g5knockout-instance': _this.$data.g5knockout_instance,
        'data-g5knockout-visible': _this.$data.g5knockout_visible,
        'data-g5knockout-bound': _this.$data.g5knockout_bound
    };

    //
    // if the observable is properly returning data, assume
    // that knockout bindings have been correctly applied
    //
    _this.koBound = _this.$data.g5knockout_bound() || false;

    return this;

};

/**
 *
 * @method addObservables
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.addObservables = function() {

    this.$data.dataCollection = ko.observableArray([]);

    return this;

};

/**
 *
 * @method reresh
 * @param {Object} data
 * @returns {Object} this
 * @description refreshes data on viewModel
 *
 */
MasterViewModel.prototype.refresh = function(data) {

    data = data || {};

    util.log('g5-knockout : refresh viewModel data : ', data);

    if (this.koBound) {
        this.$data.dataCollection(data && data.collection);
    }

    return this;

};

/**
 *
 * @method isContainerVisible
 * @param {Boolean} isVisible
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.isContainerVisible = function(isVisible) {

    if (this.koBound) {
        this.$data.g5knockout_visible(isVisible);
    }

    return this;

};

exports.MasterViewModel = MasterViewModel;
