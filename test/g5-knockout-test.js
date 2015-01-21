/**
 *
 * @module g5-knockout-test
 * @description test for core g5-knockout module
 * @author Greg Babula
 *
 */

'use strict';

var test        = require('tape');
var g5knockout  = require('../src/scripts/g5-knockout');

test('g5-knockout test', function(t) {

    t.plan(2);

    t.equal(typeof g5knockout.construct, 'function');
    t.equal(typeof g5knockout.version, 'string');

});
