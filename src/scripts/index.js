/**
 *
 * @module index
 * @description simple implementation example
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

    var demoApp = new g5Knockout({
        container: document.getElementById('g5-knockout-app')
    });

    // console.log(demoApp);
    // console.log(demoApp.url);

}

window.onload = onLoad;
