(function () {
  'use strict';

  angular
    .module('ibrplay')
    .service('Game', Game);

  /** @ngInject */
  function Game() {
    this.getList = getList;

    function getList() {
      var games = [];

      games.push({
        'date'  : '2015-08-29',
        'team1' : {
          'team'        : 'A',
          'goals'       : [0],
          'yellowCards' : [],
          'redCards'    : []
        },
        'team2' : {
          'team'        : 'E',
          'goals'       : [],
          'yellowCards' : [5],
          'redCards'    : []
        }
      });

      games.push({
        'date'  : '2015-08-29',
        'team1' : {
          'team'        : 'B',
          'goals'       : [0],
          'yellowCards' : [1, 11, 15, 20],
          'redCards'    : [9]
        },
        'team2' : {
          'team'        : 'D',
          'goals'       : [0],
          'yellowCards' : [],
          'redCards'    : []
        }
      });

      games.push({
        'date'  : '2015-09-05',
        'team1' : {
          'team'        : 'A',
          'goals'       : [],
          'yellowCards' : [2, 3, 10, 18],
          'redCards'    : []
        },
        'team2' : {
          'team'        : 'D',
          'goals'       : [0, 0],
          'yellowCards' : [5, 10, 11],
          'redCards'    : []
        }
      });

      games.push({
        'date'  : '2015-09-05',
        'team1' : {
          'team'        : 'C',
          'goals'       : [0, 0, 0],
          'yellowCards' : [8],
          'redCards'    : []
        },
        'team2' : {
          'team'        : 'F',
          'goals'       : [0, 0, 0, 0, 0],
          'yellowCards' : [],
          'redCards'    : []
        }
      });

      games.push({
        'date'  : '2015-09-07',
        'team1' : {
          'team'        : 'F',
          'goals'       : [0],
          'yellowCards' : [4, 6, 8, 16],
          'redCards'    : []
        },
        'team2' : {
          'team'        : 'D',
          'goals'       : [],
          'yellowCards' : [19],
          'redCards'    : []
        }
      });

      games.push({
        'date'  : '2015-09-07',
        'team1' : {
          'team'        : 'B',
          'goals'       : [0, 0, 0],
          'yellowCards' : [15, 17],
          'redCards'    : []
        },
        'team2' : {
          'team'        : 'E',
          'goals'       : [0, 0, 0],
          'yellowCards' : [4, 5, 7, 10, 14],
          'redCards'    : []
        }
      });

      //games.push({
      //  'date'  : '2015-MM-DD',
      //  'team1' : {
      //    'team'        : '',
      //    'goals'       : [],
      //    'yellowCards' : [],
      //    'redCards'    : []
      //  },
      //  'team2' : {
      //    'team'        : '',
      //    'goals'       : [],
      //    'yellowCards' : [],
      //    'redCards'    : []
      //  }
      //});

      return games;
    }
  }
})();
