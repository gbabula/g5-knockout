/**
 *
 * @module g5-knockout-test-events-master
 * @description EventTower test
 * @author Greg Babula
 *
 */

'use strict';

var test          = require('tape');
var EventTower    = require('../src/scripts/events/master').EventTower;

test('g5-knockout events master test', function(t) {

    t.plan(5);

    var eventTower = EventTower();

    t.ok(eventTower instanceof EventTower, 'should have instance of EventTower');

    t.equal(typeof eventTower.model, 'object');
    t.equal(typeof eventTower.viewModel, 'object');
    t.equal(typeof eventTower.attachEvents, 'function');
    t.equal(typeof eventTower.detachEvents, 'function');

});
