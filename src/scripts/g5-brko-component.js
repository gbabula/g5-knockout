/**
 *
 * @module g5-brko-component
 * @author Greg Babula
 * @description browserify module for registring KO components in bulk
 *
 * @todo properly loop through names (figure out best solution for browserify)
 * @todo cleanup/refactor
 * @todo tape test
 *
 */

'use strict';

var _     = require('lodash');
var ko    = require('knockout');
var fs    = require('fs');
var path  = require('path');
var util  = require('util');

/**
 *
 * @function register
 * @param {String|Array} components array of component name string  to register
 * @description process an array of names and registers components
 * assumes a specific directory structure 
 *
 */
exports.register = function register(components) {

    components = util.isArray(components) ? components : [components];

    var hasLength = components.length,
        component,
        name,
        componentDir;

    if (hasLength) {

        _.each(components, function(component, key) {

             componentDir = '/component/' + component + '/';
             name = component + '-component';

             util.log('g5-knockout : register component: ', name);

             ko.components.register(name, {
                 template: fs.readFileSync(__dirname + '/component/demo/demo-component.html', 'utf8'),
                 viewModel: require('./component/demo/demo-component')
             });

        });

    }

}
