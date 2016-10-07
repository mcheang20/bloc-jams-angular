 (function() {
     function SongPlayer($rootScope, Fixtures, Metric) {
         var SongPlayer = {};
/**
 * @function currentAlbum
 * @desc stores album information
 */
         var currentAlbum = Fixtures.getAlbum();
         
/**
 * @desc Buzz object audio file
 * @type {Object}
 */
         var currentBuzzObject = null;
         
 /**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */
         var playSong = function(song) {
            currentBuzzObject.play();
            SongPlayer.currentSong.playing = true;
        }
        
         var stopSong = function(song) {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
         }
    
         var setSong = function(song) {
             if (currentBuzzObject) {
                 currentBuzzObject.stop();
                 SongPlayer.currentSong.playing = null;
             };

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
             
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });
             
            currentBuzzObject.bind('volumechange', function() {
                $rootScope.$apply(function() {
                SongPlayer.currentVolume = currentBuzzObject.getVolume();
                });
            });

            SongPlayer.currentSong = song;
        };

/**
 * @function getSongIndex
 * @desc gets index of current song
 */
    var getSongIndex = function(song) {
        return currentAlbum.songs.indexOf(song);
    };

        /**
        * @desc Active song object from list of songs
        * @type {Object}
        */
        SongPlayer.currentSong = null;
         
        /**
         * @desc Current playback time (in seconds) of currently playing song
         * @type {Number}
         */
         SongPlayer.currentTime = null;
         
        /**
         * @desc Current volume of currently playing song
         * @type {Number}
         */
         SongPlayer.currentVolume = 10;

 /**
 * @function play
 * @desc Play current or new song
 * @param {Object} song
 */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
            setSong(song);
            playSong(song);
        } else if (SongPlayer.currentSong === song) {
            if (currentBuzzObject.isPaused()) {
             currentBuzzObject.play();
         }
       }       
     };
/**
 * @function pause
 * @desc Pause current song
 * @param {Object} song
 */         
      SongPlayer.pause = function(song) {
         song = song || SongPlayer.currentSong;
         currentBuzzObject.pause();
         song.playing = false;
    };
/**
 * @function SongPlayer.previous
 * @desc gets previous song
 */
      SongPlayer.previous = function() {
         var currentSongIndex = getSongIndex(SongPlayer.currentSong);
         currentSongIndex--;
          
         if (currentSongIndex < 0) {
            stopSong;
         } else {
             var song = currentAlbum.songs[currentSongIndex];
             setSong(song);
             playSong(song);
        }
    };
      
     SongPlayer.next = function() {
         var currentSongIndex = getSongIndex(SongPlayer.currentSong);
         currentSongIndex++;
          
         if (currentSongIndex > 5) {
             stopSong(song);
         } else {
             var song = currentAlbum.songs[currentSongIndex];
             setSong(song);
             playSong(song);
        }
    };
         
      /**
     * @function setCurrentTime
     * @desc Set current time (in seconds) of currently playing song
     * @param {Number} time
     */
     SongPlayer.setCurrentTime = function(time) {
         if (currentBuzzObject) {
             currentBuzzObject.setTime(time);
         }
     }; 
         
     /**
     * @function setCurrentVolume
     * @desc Set current volume of currently playing song
     * @param {Number} volume
     */
     SongPlayer.setCurrentVolume = function(volume) {
         if (currentBuzzObject) {
             currentBuzzObject.setVolume(volume);
             SongPlayer.currentVolume = volume;
         }
     };
         
    return SongPlayer;
    }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', 'Metric', SongPlayer]);
 })();