/* globals describe:false, beforeEach:false, it:false */
(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('ibrplay'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('HomeController');
    }));

    it('should have a timestamp creation date', function() {
      expect(vm).isDefined();
    });
  });
})();
