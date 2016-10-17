(function() {
  function Metric($rootScope) {
    $rootScope.registerAlbum = [];
    
    var date = new Date();
    var formatDate = moment(date);
    var newDate =  formatDate.format('MMM Do YY');
  
    return {
      songPlays: [],
      albumSongData: {},
      // Function that records a metric object by pushing it to the $rootScope array
      registerSongPlay: function(song) {
        // Add time to event register
        song['playedAt'] = newDate;

        var currentDay = date.getDate();
        
          if( this.songPlays.length ){
              this.songPlays.forEach( function( item ){
              console.log(item);
               // if current date is in this.songPlays - add one to totalPlays of song
              if( item[0] === currentDay ){
                  item[1]++;
              }
               // otherwise..
              else {
                this.songPlays.push([ date.getDate(), 1 ]);
              }
            } );
          }
       
          else {
              this.songPlays.push([ date.getDate(), 1 ]);
          }
      },
        
       listSongsPlayed: function() {
            var songs = [];
            angular.forEach($rootScope.songPlays, function(song) {
                songs.push(song.title);
            });
            return songs;
      },
        
      registerAlbumView: function(album) {
        album['viewedAt'] = newDate;
//        $rootScope.registerAlbum.push(album);
         album.songs.forEach( function(song){
          console.log(song);
          this.albumSongData[song.name] = { newDate: [17, 3] };
         } );
        /*
        {
            blue: { 
              "Oct 17 16": [ [17 (the day of the click for chart), 34 (number of clicks)] ],
              "Oct 18 16": []
            },
            green: [],
            red: [],
            pink: [],
            magenta: []
        
        
        }
        */
      },
        
      listAlbumViews: function() {
          var albums = [];
          angular.forEach($rootScope.registerAlbum, function(album) {
            albums.push(album.title);      
          });
          return albums;
      },
    };
  }

  angular
    .module('blocJams')
    .service('Metric', ['$rootScope', Metric]);
})();