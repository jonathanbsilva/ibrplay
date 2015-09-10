(function () {
  'use strict';

  angular
    .module('ibrplay')
    .service('Team', Team)
    .filter('fullName', FullName);

  /** @ngInject */
  function Team(Game) {
    var teams = [
      {'uid' : 'A', 'name' : 'Elim'},
      {'uid' : 'B', 'name' : 'Adonai'},
      {'uid' : 'C', 'name' : 'Leão de Judá'},
      {'uid' : 'D', 'name' : 'Ebenezér'},
      {'uid' : 'E', 'name' : 'Exôdo'},
      {'uid' : 'F', 'name' : 'Incomparavél'}
    ];

    this.getByUid = getByUid;
    this.getList = getList;

    function getByUid(uid) {
      var team = _.find(teams, {'uid' : uid});
      if (team) {
        team.fullName = '(' + team.uid + ') ' + team.name;
      }
      return team;
    }

    function getList() {
      var games = Game.getList();

      teams.forEach(function (team) {
        team.points = 0;
        team.games = 0;
        team.favourGoals = 0;
        team.againstGoals = 0;
        team.fullName = '(' + team.uid + ') ' + team.name;

        games.forEach(function (game) {
          var me, adversary;

          if (game.team1.team === team.uid) {
            me = game.team1;
            adversary = game.team2;
          } else if (game.team2.team === team.uid) {
            me = game.team2;
            adversary = game.team1;
          }

          if (me) {
            team.games++;
            team.favourGoals += me.goals.length;
            team.againstGoals += adversary.goals.length;
            if (me.goals.length > adversary.goals.length) {
              team.points += 3;
            } else if (me.goals.length === adversary.goals.length) {
              team.points += 1;
            }
          }
        });
      });

      return teams;
    }
  }

  function FullName (Team) {
    return function (uid) {
      var team = Team.getByUid(uid);
      return team.fullName;
    }
  }

})();
