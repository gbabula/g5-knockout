/**
 *
 * @module g5-knockout-test-events-master
 * @description test master events / EventTower
 * @author Greg Babula
 *
 */

'use strict';

var test          = require('tape');
var masterEvents  = require('../src/scripts/events/master');

test('g5-knockout events master test', function(t) {

    t.plan(5);

    t.equal(typeof masterEvents.EventTower, 'function');
    t.equal(typeof masterEvents.EventTower().model, 'object');
    t.equal(typeof masterEvents.EventTower().viewModel, 'object');
    t.equal(typeof masterEvents.EventTower().attachEvents, 'function');
    t.equal(typeof masterEvents.EventTower().detachEvents, 'function');

});
