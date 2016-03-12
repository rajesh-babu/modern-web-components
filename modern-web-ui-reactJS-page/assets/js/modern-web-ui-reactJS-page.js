/**
 * Modern Shared Components: ReactJS-page
 * @requires jquery
 * @return SearchForm
 * @contrib Rajesh
 * @version 1.0.0
 */
define(['jquery'], function($) {

  // Constructor
  var ReactJS = {

    // Defaults
    defaults: {
      componentSelector:                   '.ReactJS-component'              // Component selector

    },

    // Initialize
    init: function(elem, options, i) {
      var my = this;
      my.options = $.extend({}, my.defaults, options);

      // References
      my.$window = $(window);
      my.$elem = $(elem);
      my.$component = my.$elem.find(my.options.componentSelector);

      // Activate
      my.activate();
    },

    // Activate
    activate: function() {
      var my = this;
      my._addEventHandlers();
      my.$window = $(window);
    },

    // Add handlers
    _addEventHandlers: function() {
      var my = this;
    },
			
    // Deactivate
    deactivate: function() {
      var my = this;
    }
  };

  // Return
  return ReactJS;

});
