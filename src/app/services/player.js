(function () {
  'use strict';

  angular
    .module('ibrplay')
    .service('Player', Player);

  /** @ngInject */
  function Player($cookies, Game) {
    this.get = get;
    this.save = save;


    function get() {
      var player, games;

      player = $cookies.getObject('player') || {};
      games = Game.getList();

      player.goals = 0;
      player.yellowCards = 0;
      player.redCards = 0;

      if (player.team && player.shirt) {
        games.forEach(function (game) {
          var team;

          if (game.team1.team === player.team) {
            team = game.team1;
          } else if (game.team2.team === player.team) {
            team = game.team2;
          }

          if (team) {
            team.goals.forEach(function (goal) {
              if (goal === player.shirt) {
                player.goals++;
              }
            });

            team.yellowCards.forEach(function (yellowCard) {
              if (yellowCard === player.shirt) {
                player.yellowCards++;
              }
            });

            team.redCards.forEach(function (redCard) {
              if (redCard === player.shirt) {
                player.redCards++;
              }
            });
          }
        });
      }

      return player;
    }

    function save(player) {
      $cookies.putObject('player', player);
      return get();
    }
  }
})();
