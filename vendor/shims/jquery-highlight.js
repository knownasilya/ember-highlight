(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['jquery-highlight'],
      __esModule: true,
    };
  }

  define('jquery-highlight', [], vendorModule);
})();
