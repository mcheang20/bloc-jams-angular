(function() {
     function MetricCtrl(Metric, Fixtures, $rootScope) {
        console.log($rootScope.songPlays);
       this.Metric = Metric;
       this.Fixtures = Fixtures.getAlbum;
       this.name = "Bloc Jams Metrics";
       this.dataArray =  this.Metric.albumSongData;
         
       this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value + (1e-10);},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.0f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
       };
         

           this.data = [
               {
                "key" : "Songs Played" ,
//                "values": [
//                    {
//                       label: "Blue",
//                       value: 5
//                    },
//                    {
//                        label: "Green",
//                        value: 10
//                    },
//                    {
//                        label: "Red",
//                        value: 3
//                    },
//                    {
//                        label: "Pink",
//                        value: 12
//                    },
//                    {
//                        label: "Magenta",
//                        value: 7
//                    }
//                ]
//                   
                   values: this.dataArray
               }];
           
     }
    
 
     angular
         .module('blocJams')
         .controller('MetricCtrl', ['$rootScope', 'Metric', 'Fixtures', MetricCtrl]);
 })();
