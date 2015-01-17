/**
 *
 * @module g5-knockout-test
 * @description 
 * @author Greg Babula
 *
 */

'use strict';

var test        = require('tape');
var g5knockout  = require('../src/scripts/g5-knockout');

test('g5-knockout test', function(t) {

    t.plan(1);

    t.equal(g5knockout.version, '0.1.0');

});
