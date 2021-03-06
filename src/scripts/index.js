/**
 *
 * @module index
 * @description g5-knockout implementation example
 * @author Greg Babula
 *
 */

'use strict';

const util       = require('util');
const g5Knockout = require('./g5-knockout').construct;

/**
 *
 * @function onLoad
 *
 */
function onLoad() {

    let demoApp = g5Knockout({
        container: document.getElementById('g5-knockout-app'),
        interval: 10000,
        path: '/src/data/demo-app.json',
        enablePolling: true
    });

    demoApp.init();

    util.log('g5-knockout : init demoApp instance :', demoApp.instance);
    util.log('g5-knockout : demoApp model instance :', demoApp.model.instance);
    util.log('g5-knockout : demoApp viewModel instance :', demoApp.viewModel.instance);
    util.log('g5-knockout : demoApp viewModel knockout bindings :', demoApp.viewModel.koBound);

}

window.onload = onLoad;
