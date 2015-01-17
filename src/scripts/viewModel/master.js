/**
 *
 * @module viewModel/master
 * @description 
 * @author Greg Babula
 *
 */

'use strict';

var _      = require('lodash');
var ko     = require('knockout');
var util   = require('util');

/**
 *
 * @constructor viewModelMaster
 * @param {Object} opts
 *
 */
function viewModelMaster(opts) {

    var _this = this;

    this.opts = _.extend({
        css: 'g5-knockout-app'
    }, opts);

    this.css = ko.observable(_this.opts.css);

    this.textStr = ko.observable('testing');

}

/**
 *
 * @method reresh
 * @param {Object} data
 * @description refreshes data on viewModel
 *
 */
viewModelMaster.prototype.refresh = function(data) {

    util.log('g5-knockout : refresh viewModel');

    // this.textStr(data.textStr);

};



exports.master = viewModelMaster;
