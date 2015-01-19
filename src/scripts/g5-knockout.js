/**
 *
 * @module g5-knockout
 * @description knockout/browserify base app
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
 * @param {String} opts.container container id attr
 *
 */
function G5Knockout(opts) {

    var _this = this;

    if (!(this instanceof G5Knockout)) {
        return new G5Knockout(opts);
    }

    this.opts = _.extend({
        container: document.getElementById('g5-knockout-app')
    }, opts);

    this.instance = false;
    this.container = this.opts.container;

    this.model = new MasterModel();
    this.viewModel = new MasterViewModel(_this.opts);

    masterEvents.EventTower.call(this);
    events.EventEmitter.call(this);

    this.init();

}

util.inherits(G5Knockout, events.EventEmitter);

/**
 *
 * @method init
 * @description initiates G5Knockout instance
 * @returns {Object} this
 *
 */
G5Knockout.prototype.init = function() {

    var _this = this;

    util.log('g5-knockout : init');

    if (!this.instance) {

        ko.applyBindings(_this.viewModel, _this.container);

        _this.instance = true;
        _this.model.init();

    }

    console.log(window.location.href);
    console.log(url.parse(window.location.href));

    return this;

};

exports.version = '0.1.0';

exports.construct = G5Knockout;
