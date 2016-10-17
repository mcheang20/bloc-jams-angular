(function() {
     function MetricCtrl(Metric, $rootScope) {
         console.log($rootScope.songPlays);
       this.Metric = Metric;
         this.name = "Bloc Jams Metrics";
//         this.dataArray = [ $rootScope.songPlays ];
         this.dataArray = [ [$rootScope.songPlays] ];
         
       this.options = {
           chart: {
                type: 'historicalBarChart',
                height: 450,
                margin : {
                    top: 20,
                    bottom: 65,
                    left: 50
                },
                x: function(d){return d[0];},
                y: function(d){return d[1];},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.1f')(d);
                },
                duration: 100,
                xAxis: {
                    axisLabel: 'Date',
                    tickFormat: function(d) {
                        return d3.time.format('%x')(new Date(d))
                    },
                    rotateLabels: 30,
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Song Plays',
                    axisLabelDistance: -10,
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                },
                tooltip: {
                    keyFormatter: function(d) {
                        return d3.time.format('%x')(new Date(d));
                    }
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
       };
           
           this.data = [
               {
                "key" : "Songs Played" ,
                "bar": true,
                "values": this.dataArray
               }];
           
     }
    
 
     angular
         .module('blocJams')
         .controller('MetricCtrl', ['$rootScope', 'Metric', MetricCtrl]);
 })();
