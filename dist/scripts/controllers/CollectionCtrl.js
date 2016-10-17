(function() {
     function CollectionCtrl(Fixtures, Metric, $rootScope) {
        this.albums = Fixtures.getCollection(12);
        this.Metric = Metric;
     }
    
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['Fixtures', 'Metric', '$rootScope', CollectionCtrl]);
 })();
