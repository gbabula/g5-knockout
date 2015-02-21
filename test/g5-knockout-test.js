/**
 *
 * @module g5-knockout-test
 * @description test for core g5-knockout module
 * @author Greg Babula
 *
 */

'use strict';

var test          = require('tape');
var g5Knockout    = require('../src/scripts/g5-knockout');
var EventEmitter  = require('events').EventEmitter;

test('g5-knockout core test', function(t) {

    var testApp = g5Knockout.construct({
        container: undefined
    });

    t.plan(12);

    t.equal(typeof g5Knockout.construct, 'function');
    t.equal(typeof g5Knockout.VERSION, 'string');

    t.ok(testApp instanceof g5Knockout.construct, 'should have instance of G5Knockout');
    t.ok(testApp instanceof EventEmitter, 'should have instance of EventEmitter');

    t.equal(typeof testApp.instance, 'boolean');
    t.equal(typeof testApp.model, 'object');
    t.equal(typeof testApp.viewModel, 'object');

    t.equal(typeof testApp.init, 'function');
    t.equal(typeof testApp.display, 'function');
    t.equal(typeof testApp.off, 'function');
    t.equal(typeof testApp.on, 'function');
    t.equal(typeof testApp.destroy, 'function');

});
