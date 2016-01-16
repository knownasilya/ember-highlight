/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-highlight',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    target.import('vendor/simple.css');
    target.import(path.join(target.bowerDirectory, 'jquery-highlight', 'jquery.highlight.js'));
  }
};
