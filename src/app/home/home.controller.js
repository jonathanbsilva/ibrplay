(function () {
  'use strict';

  angular
    .module('ibrplay')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, Player, Team, Game) {
    var vm = this;

    vm.player = Player.get();
    vm.teams = Team.getList();
    vm.games = Game.getList();

    vm.editingPlayer = false;
    vm.savePlayer = savePlayer;

    function savePlayer() {
      vm.player = Player.save(vm.player);
      vm.editingPlayer = false;
    }

    var watch, watchTimes = 0;
    watch = $scope.$watch(function () {
      return vm.player
    }, function () {
      watchTimes++;
      vm.editingPlayer = watchTimes > 1;
    }, true);

    $scope.$on('$destroy', watch);
  }
})();
