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

    // todo, get accurate Boolean here
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

    this.addObservables();

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

    util.log('g5-knockout : viewModel bindings applied? : ', _this.data_ko_bound);
    util.log('g5-knockout : add viewModel observables');

    this.css = ko.observable(_this.opts.css);
    this.data_ko_bound = ko.observable(_this.koBound);

    this.userName = ko.observable('');
    this.userNameLength = ko.observable('0');
    this.dataCollection = ko.observableArray([]);

    /**
     *
     * @function updateUserNameLength
     * @description example function that mutates input
     *
     */
    this.updateUserNameLength = function() {
        _this.userNameLength(_this.userName() && _this.userName().length);
    }

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

    var collection = data && data.collection;

    util.log('g5-knockout : refresh viewModel data : ', data);

    this.dataCollection(collection);

    return this;

};

exports.MasterViewModel = MasterViewModel;
