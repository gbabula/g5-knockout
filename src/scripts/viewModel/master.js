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
 * @param {String} opts.data_ko_bound
 *
 */
function MasterViewModel(opts) {

    var _this = this;

    if (!(this instanceof MasterViewModel)) {
        return new MasterViewModel(opts);
    }

    this.opts = _.extend({
        css: 'g5-knockout-app g5-knockout-bound',
        data_ko_bound: 'true'
    }, opts);

    this.addObservables();

    events.EventEmitter.call(this);
}

util.inherits(MasterViewModel, events.EventEmitter);

/**
 *
 * @method addObservables
 * @returns {Object} this
 *
 */
MasterViewModel.prototype.addObservables = function() {

    var _this = this;

    this.css = ko.observable(this.opts.css);
    this.data_ko_bound = ko.observable(this.opts.data_ko_bound);

    this.userName = ko.observable('');
    this.userNameLength = ko.observable('0');

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

    util.log('g5-knockout : refresh viewModel');

    //
    // update observables with new data
    //

    return this;

};

exports.MasterViewModel = MasterViewModel;
