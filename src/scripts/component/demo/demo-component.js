/**
 * 
 * @module DemoComponentViewModel
 * @description simple baseline ViewModel
 * @author Greg Babula
 * 
 */

'use strict';

const ko = require('knockout');

/**
 * 
 * @constructor DemoComponentViewModel
 * @param {Object} params
 * 
 */
function DemoComponentViewModel(params) {

    let _this = this;

    this.$data = params;
    this.$data.userName = ko.observable('');
    this.$data.userNameLength = ko.observable(0);

    /**
     *
     * @function
     * @description computed function example
     * @returns {Number} user name length
     *
     */
    this.$data.userNameLength = ko.computed(function() {

        return _this.$data.userName() && _this.$data.userName().length;

    });

}

module.exports = DemoComponentViewModel;
