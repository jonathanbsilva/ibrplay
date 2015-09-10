(function() {
  'use strict';

  angular
    .module('ibrplay')
    .run(runBlock);

  /** @ngInject */
  function runBlock($timeout, $rootScope) {
    $rootScope._ = _;
    $rootScope.materialize = function () {
      $timeout(function () {
        angular.element('.tooltipped').tooltip();
        angular.element('select:not(.initialized)').material_select();
      });
    };

    var on = $rootScope.$on('$routeChangeSuccess', $rootScope.materialize());
    $rootScope.$on('$destroy', on);

  }

})();
