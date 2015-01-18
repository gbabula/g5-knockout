/**
 *
 * @module viewModel/master
 * @description 
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
 *
 */
MasterViewModel.prototype.addObservables = function() {

    this.css = ko.observable(this.opts.css);
    this.data_ko_bound = ko.observable(this.opts.data_ko_bound);

    this.textStr = ko.observable('testing');

};

/**
 *
 * @method reresh
 * @param {Object} data
 * @description refreshes data on viewModel
 *
 */
MasterViewModel.prototype.refresh = function(data) {

    util.log('g5-knockout : refresh viewModel');

    // this.textStr(data.textStr);

};

exports.MasterViewModel = MasterViewModel;
