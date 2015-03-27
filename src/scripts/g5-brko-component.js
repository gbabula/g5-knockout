/**
 *
 * @module g5-brko-component
 * @author Greg Babula
 * @description single location for KO component register
 *
 */

'use strict';

var ko    = require('knockout');
var fs    = require('fs');
var path  = require('path');

/**
 *
 * @function register
 * @description component register, each component must be listed and cannot be iterated over
 * because a variable value cannot be passed to brfs (https://github.com/substack/brfs/issues/36)
 * this causes a litle repetition, all components must be registered in this module
 *
 */
exports.register = function register() {

    ko.components.register('demo-component', {
        template: fs.readFileSync(path.join(__dirname, '/component/demo/demo-component.html'), 'utf8'),
        viewModel: require('./component/demo/demo-component')
    });

}
