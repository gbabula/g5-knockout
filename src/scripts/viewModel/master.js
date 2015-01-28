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
        this.addG5Observables();

        // 
        // module specific observables chained with computed function additions,
        // makes sense to think about it this way because the computed functions
        // will be mutating previously added observables
        // 
        this.addObservables().addComputedFunctions();

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

    util.log('g5-knockout : add viewModel observables');

    this.css = ko.observable(_this.opts.css);

    this.data_g5knockout_instance = ko.observable(_this.instance);
    this.data_g5knockout_visible = ko.observable(_this.active);
    this.data_g5knockout_bound = ko.observable(!!_this.data_g5knockout_instance());

    // 
    // if the observable is properly returning data, assume
    // that knockout bindings have been correctly applied
    // 
    _this.koBound = _this.data_g5knockout_bound() || false;

    return this;

};

/**
 *
 * @method addObservables
 * @description method wrapping observable additions, single location for all regular observables
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.addObservables = function() {

    this.userName = ko.observable('');
    this.userNameLength = ko.observable(0);

    this.dataTime = ko.observable();
    this.dataCollection = ko.observableArray([]);

    return this;

};

/**
 *
 * @method addComputedFunctions
 * @description single location for all computed functions
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.addComputedFunctions = function() {

    var _this = this;

    /**
     *
     * @function
     * @description computed function example
     * @returns {Number} user name length
     *
     */
    this.userNameLength = ko.computed(function() {

        return _this.userName() && _this.userName().length;

    });

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

    var collection = data.collection,
        time = data.time;

    util.log('g5-knockout : refresh viewModel data : ', data);

    if (this.koBound) {

        this.dataCollection(collection);
        this.dataTime(time);

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

        this.data_g5knockout_visible(isVisible);

    }

    return this;

};

exports.MasterViewModel = MasterViewModel;
