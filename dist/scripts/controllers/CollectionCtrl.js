(function() {
     function CollectionCtrl(Fixtures, Metric, $rootScope) {
        this.albums = Fixtures.getCollection(1);
        this.Metric = Metric;
     }


     angular
         .module('gorillaMusic')
         .controller('CollectionCtrl', ['Fixtures', 'Metric', '$rootScope', CollectionCtrl]);
 })();
