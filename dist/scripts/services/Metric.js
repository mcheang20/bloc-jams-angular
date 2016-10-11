(function() {
  function Metric($rootScope) {
    $rootScope.songPlays = [];
    var date = new Date();
    var formatDate = moment(date);
    var newDate =  formatDate.format('MMM Do YY');
  
    return {
      // Function that records a metric object by pushing it to the $rootScope array
      registerSongPlay: function(song) {
        // Add time to event register
        
        song['playedAt'] = newDate;
        $rootScope.songPlays.push(song);
      },
      listSongsPlayed: function() {
        var songs = [];
        angular.forEach($rootScope.songPlays, function(song) {
            songs.push(song.title);
        });
        return songs;
      }
    };
  }

  angular
    .module('blocJams')
    .service('Metric', ['$rootScope', Metric]);
})();