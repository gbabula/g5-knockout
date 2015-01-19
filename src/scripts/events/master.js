/**
 *
 * @module events/master
 * @description handles communication between the model and viewModel
 * @author Greg Babula
 *
 */

'use strict';

var util = require('util');

/**
 *
 * @constructor EventTower
 *
 */
function EventTower() {

    var _this = this;

    if (!(this instanceof EventTower)) {
        return new EventTower();
    }

    this.model = this.model || {};
    this.viewModel = this.viewModel || {};

    this.attachEvents();

}

/**
 *
 * @method attachEvents
 * @returns {Objec} this
 *
 */
EventTower.prototype.attachEvents = function() {

    var _this = this,
        _model = _this.model,
        _viewModel = _this.viewModel;

    console.log(_this);
    console.log(_model);
    console.log(_viewModel);

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
     * @event data-refresh
     * @param {Object} data
     *
     */
    _viewModel.on('data-refresh', function(data) {

        // _viewModel.refreh(data);

    });

    return this;

};

exports.EventTower = EventTower;
