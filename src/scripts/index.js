/**
 *
 * @module index
 * @description 
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
        container: document.getElementById('g5-knockout')
    });

    // var demoApp = Object.create(g5Knockout.prototype);

    // console.log( demoApp );

    // app.on('init', function(data) {

        // util.log('g5-knockout : init event : ', data);

    // });

}

window.onload = onLoad;
