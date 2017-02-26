(function() {
     function PlayerBarCtrl(Fixtures, SongPlayer) {
         this.albumData = Fixtures.getAlbum();
         this.songPlayer = SongPlayer;
     }

     angular
         .module('gorillaMusic')
         .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
 })();
