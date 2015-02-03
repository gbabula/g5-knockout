/**
 *
 * @module index
 * @description g5-knockout implementation example
 * @author Greg Babula
 *
 */

'use strict';

var util         = require('util');
var g5Knockout   = require('./g5-knockout').construct;

/**
 *
 * @function onLoad
 *
 */
function onLoad() {

    var demoApp = g5Knockout({
        container: document.getElementById('g5-knockout-app')
    });

    demoApp.init();

    util.log('g5-knockout : init demoApp instance :', demoApp.instance);
    util.log('g5-knockout : demoApp model instance :', demoApp.model.instance);
    util.log('g5-knockout : demoApp viewModel instance :', demoApp.viewModel.instance);
    util.log('g5-knockout : demoApp viewModel knockout bindings :', demoApp.viewModel.koBound);

}

window.onload = onLoad;
