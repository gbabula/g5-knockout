/**
 *
 * @module g5-knockout-test-viewModel-master
 * @description MasterModel test
 * @author Greg Babula
 *
 */

'use strict';

const test             = require('tape');
const MasterViewModel  = require('../src/scripts/viewModel/master').MasterViewModel;
const EventEmitter     = require('events').EventEmitter;

test('g5-knockout viewModel master test', function(t) {

    t.plan(12);

    let viewModel = MasterViewModel();

    t.ok(viewModel instanceof MasterViewModel, 'should have instance of MasterViewModel');
    t.ok(viewModel instanceof EventEmitter, 'should have instance of EventeEmitter');

    t.equal(typeof viewModel.opts, 'object');
    t.equal(typeof viewModel.$data, 'object');
    t.equal(typeof viewModel.instance, 'boolean');
    t.equal(typeof viewModel.active, 'boolean');
    t.equal(typeof viewModel.koBound, 'boolean');

    t.equal(typeof viewModel.init, 'function');
    t.equal(typeof viewModel.addG5Observables, 'function');
    t.equal(typeof viewModel.addObservables, 'function');
    t.equal(typeof viewModel.refresh, 'function');
    t.equal(typeof viewModel.isContainerVisible, 'function');

});
