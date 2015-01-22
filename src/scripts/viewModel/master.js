/**
 *
 * @module viewModel/master
 * @description master viewModel
 * @author Greg Babula
 *
 */

'use strict';

var _       = require('lodash');
var ko      = require('knockout');
var util    = require('util');
var events  = require('events');

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

    var _this = this;

    if (!(this instanceof MasterViewModel)) {
        return new MasterViewModel(opts);
    }

    this.opts = _.extend({
        css: 'g5-knockout-app g5-knockout-bound',
        container: undefined
    }, opts);

    this.koBound = false;

    events.EventEmitter.call(this);

}

util.inherits(MasterViewModel, events.EventEmitter);

/**
 *
 * @method init
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.init = function() {

    this.addG5Observables();
    this.addObservables();

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
    this.data_g5knockout_instance = ko.observable(true);
    this.data_knockout_bound = ko.observable(!!_this.data_g5knockout_instance());

    // 
    // if the observable is properly returning data, assume
    // that knockout bindings have been correctly applied
    // 
    _this.koBound = !!_this.data_g5knockout_instance();

    return this;

};

/**
 *
 * @method addObservables
 * @description method wrapping observable additions
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.addObservables = function() {

    var _this = this;

    this.userName = ko.observable('');
    this.userNameLength = ko.observable(0);

    this.dataTime = ko.observable();
    this.dataCollection = ko.observableArray([]);

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

    this.dataCollection(collection);
    this.dataTime(time);

    return this;

};

exports.MasterViewModel = MasterViewModel;
