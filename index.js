/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-highlight',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    target.import('vendor/simple.css');
  }
};
