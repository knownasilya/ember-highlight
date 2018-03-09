'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-highlight',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/simple.css');
    this.import('vendor/shims/jquery-highlight.js');
  },

  treeForVendor(vendorTree) {
    let jqueryHighlightTree = new Funnel(path.dirname(require.resolve('jquery-highlight/jquery.highlight.js')), {
      files: ['jquery.highlight.js']
    });

    jqueryHighlightTree = map(jqueryHighlightTree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new MergeTrees([vendorTree, jqueryHighlightTree]);
  }
};
