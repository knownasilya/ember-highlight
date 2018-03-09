'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-highlight',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/simple.css');
    this.import('vendor/shims/jquery-highlight.js');
  },

  treeForVendor(vendorTree) {
    var jqueryHighlightTree = new Funnel(path.dirname(require.resolve('jquery-highlight/jquery.highlight.js')), {
      files: ['jquery.highlight.js']
    });

    return new MergeTrees([vendorTree, jqueryHighlightTree]);
  }
};
