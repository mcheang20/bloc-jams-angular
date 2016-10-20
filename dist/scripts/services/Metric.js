(function() {
  function Metric($rootScope) {
    $rootScope.songPlays = [];
    $rootScope.registerAlbum = [];
    
    var date = new Date();
    var formatDate = moment(date);
    var newDate =  formatDate.format('MMM Do YY');
    $rootScope.albumSongData = [];
  
    return {
      // Function that records a metric object by pushing it to the $rootScope array
      registerSongPlay: function(song) {
          $rootScope.albumSongData.forEach( function( obj ){
             if( obj.label === song.title ){
                 obj.value += 1;
             } 
          });
          console.log($rootScope.albumSongData);
      },
        
      registerAlbumView: function(album) {
         album.songs.forEach( function(song){
          console.log(song);
          $rootScope.albumSongData.push({label: song.title, value: 0});
         } );
          
          console.log($rootScope.albumSongData)
                /*
         
        $rootScope.albumSongData = [
                    {
                       label: "Blue",
                       value: 0
                    }
                    {
                        label: "Green",
                        value: 0
                    },
                    {
                        label: "Red",
                        value: 0
                    },
                    {
                        label: "Pink",
                        value: 0
                    },
                    {
                        label: "Magenta",
                        value: 0
                    }
                ]
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