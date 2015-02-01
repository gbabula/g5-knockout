/**
 *
 * @module g5-knockout-test
 * @description test for core g5-knockout module
 * @author Greg Babula
 *
 */

'use strict';

var test        = require('tape');
var g5Knockout  = require('../src/scripts/g5-knockout');

test('g5-knockout core test', function(t) {

    t.plan(2);

    t.equal(typeof g5Knockout.construct, 'function');
    t.equal(typeof g5Knockout.VERSION, 'string');

});
