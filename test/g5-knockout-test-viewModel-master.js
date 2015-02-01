/**
 *
 * @module g5-knockout-test-viewModel-master
 * @description MasterModel test
 * @author Greg Babula
 *
 */

'use strict';

var test             = require('tape');
var MasterViewModel  = require('../src/scripts/viewModel/master').MasterViewModel;
var EventEmitter     = require('events').EventEmitter;

test('g5-knockout viewModel master test', function(t) {

    t.plan(13);

    var viewModel = MasterViewModel();

    t.equal(viewModel instanceof MasterViewModel, true);
    t.equal(viewModel instanceof EventEmitter, true);

    t.equal(typeof viewModel.opts, 'object');
    t.equal(typeof viewModel.$data, 'object');
    t.equal(typeof viewModel.instance, 'boolean');
    t.equal(typeof viewModel.active, 'boolean');
    t.equal(typeof viewModel.koBound, 'boolean');

    t.equal(typeof viewModel.init, 'function');
    t.equal(typeof viewModel.addG5Observables, 'function');
    t.equal(typeof viewModel.addObservables, 'function');
    t.equal(typeof viewModel.addComputedFunctions, 'function');
    t.equal(typeof viewModel.refresh, 'function');
    t.equal(typeof viewModel.isContainerVisible, 'function');

});
