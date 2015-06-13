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

const _             = require('lodash');
const util          = require('util');
const EventEmitter  = require('events').EventEmitter;

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

    let hasEvents = target && hasEventEmitter(target) && _.size(target._events);

    if (hasEvents) {
        target.removeAllListeners();
    }

}

/**
 *
 * @constructor EventTower
 * @param {Object} master
 * @param {Object} model
 * @param {Object} viewModel
 * @description mediates events between model and viewModel
 *
 */
function EventTower(master, model, viewModel) {

    if (!(this instanceof EventTower)) {
        return new EventTower(master, model, viewModel);
    }

    this.master = master || {};
    this.model = model || {};
    this.viewModel = viewModel || {};

    //
    // ensure all targets have an instance of
    // EventEmitter before proceeding to attach events
    //
    if (hasEventEmitter(this.master) && hasEventEmitter(this.model) && hasEventEmitter(this.viewModel)) {
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

    let _master = this.master;
    let _model = this.model;
    let _viewModel = this.viewModel;

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

    let _master = this.master;
    let _model = this.model;
    let _viewModel = this.viewModel;
    let _eventGroup = [_master, _model, _viewModel];

    util.log('g5-knockout : remove events');

    _.each(_eventGroup, function(obj) {
        detachEvents(obj);
    });

    return this;

};

exports.EventTower = EventTower;
