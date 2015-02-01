/**
 *
 * @module g5-knockout-test-model-master
 * @description MasterModel test
 * @author Greg Babula
 *
 */

'use strict';

var test          = require('tape');
var MasterModel   = require('../src/scripts/model/master').MasterModel;
var EventEmitter  = require('events').EventEmitter;

test('g5-knockout model master test', function(t) {

    t.plan(7);

    var model = MasterModel();

    t.equal(model instanceof MasterModel, true);
    t.equal(model instanceof EventEmitter, true);

    t.equal(typeof model.opts, 'object');
    t.equal(typeof model.dataCache, 'object');
    t.equal(typeof model.instance, 'boolean');

    t.equal(typeof model.init, 'function');
    t.equal(typeof model.fetch, 'function');

});
