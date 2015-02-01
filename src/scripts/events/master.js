/**
 *
 * @module events/master
 * @description handles communication between the model and viewModel
 * events are defined in a single location which allows the overall app flow to be visualized 
 * much easier, especially for developers new to the project
 * @author Greg Babula
 *
 */

'use strict';

var _             = require('lodash');
var util          = require('util');
var EventEmitter  = require('events').EventEmitter;

/**
 *
 * @function hasEventEmitter
 * @param {Object} obj
 * @returns {Boolean}
 * @description returns true if given obj has an instance of EventEmitter
 *
 */
function hasEventEmitter(obj) {

    return obj && obj instanceof EventEmitter;

}

/**
 *
 * @function detachEvents
 * @param {Object} target
 * @description checks if a given target has events, proceeds to remove if true
 *
 */
function detachEvents(target) {

    var hasEvents = target && hasEventEmitter(target) && _.size(target._events);

    if (hasEvents) {
        target.removeAllListeners();
    }

}

/**
 *
 * @constructor EventTower
 * @description mediates events between model and viewModel
 *
 */
function EventTower() {

    if (!(this instanceof EventTower)) {
        return new EventTower();
    }

    this.model = this.model || {};
    this.viewModel = this.viewModel || {};

    // 
    // ensure that model and viewModel both have an instance of
    // EventEmitter before proceeding to attach events
    // 
    if (hasEventEmitter(this.model) && hasEventEmitter(this.viewModel)) {
        this.attachEvents();
    }

}

/**
 *
 * @method attachEvents
 * @description core attachEvents method, single location for all events
 * @returns {Object} this
 *
 */
EventTower.prototype.attachEvents = function() {

    var _this = this,
        _model = _this.model,
        _viewModel = _this.viewModel;

    util.log('g5-knockout : add events');

    /**
     *
     * @event data
     * @param {Object} data
     *
     */
    _model.on('data', function(data) {

        _viewModel.emit('data-refresh', data);

    });

    /**
     *
     * @event data-error
     * @param {Object} err
     *
     */
    _model.on('data-error', function(err) {

        util.log('g5-knockout : error fetching model data :', err);

    });

    /**
     *
     * @event data-refresh
     * @param {Object} data
     *
     */
    _viewModel.on('data-refresh', function(data) {

        _viewModel.refresh(data);

    });

    return this;

};

/**
 *
 * @method detachEvents
 * @description detaches all events from core, model, and viewModel
 * @returns {Object} this
 *
 */
EventTower.prototype.detachEvents = function() {

    var _this = this,
        _model = _this.model,
        _viewModel = _this.viewModel,
        _eventGroup = [_this, _model, _viewModel];

    util.log('g5-knockout : remove events');

    _.each(_eventGroup, function(obj) {
        detachEvents(obj);
    });

    return this;

};

exports.EventTower = EventTower;
