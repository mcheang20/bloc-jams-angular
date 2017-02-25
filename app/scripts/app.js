(function() {
     function config($stateProvider, $locationProvider) {

         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

        $stateProvider
         .state('landing', {
             url: '/',
             controller: 'LandingCtrl as landing',
             templateUrl: '/templates/landing.html'
         })

          .state('album', {
             url: '/album',
             controller: 'AlbumCtrl as album',
             templateUrl: '/templates/album.html'
         })

        .state('collection', {
            url: '/collection',
            controller: 'CollectionCtrl as collection',
            templateUrl: '/templates/collection.html'
        })

         .state('metric', {
            url: '/metric',
            controller: 'MetricCtrl as metric',
            templateUrl: '/templates/metric.html'
        })

        .state('login', {
           url: '/login',
           controller: 'AuthCtrl as auth',
           templateUrl: '/templates/login.html'
       })

       .state('register', {
          url: '/register',
          controller: 'AuthCtrl as auth',
          templateUrl: '/templates/registration.html'
      })

      .state('success', {
         url: '/success',
         controller: '',
         templateUrl: '/templates/success.html'
      });
    }

    angular
         .module('gorillaMusic', ['ui.router', 'nvd3', 'firebase'])
         .config(config);
 })();
