(function() {
     function AlbumCtrl(Fixtures, SongPlayer, Metric, $rootScope) {
      console.log(Metric);
      console.log($rootScope.songPlays);
      this.albumData = Fixtures.getAlbum();
      this.songPlayer = SongPlayer;
      this.Metric = Metric;
      }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures','SongPlayer', 'Metric', '$rootScope', AlbumCtrl]);
 })();
