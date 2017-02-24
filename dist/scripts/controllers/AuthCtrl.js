(function() {
     function AuthCtrl($scope, Authentication) {

       $scope.login = function() {
         Authentication.login($scope.user);
       };

       $scope.logout = function() {
         Authentication.logout();
       };

       $scope.signUp = function() {
          Authentication.signUp($scope.user);
       };
     }

     angular
         .module('blocJams')
         .controller('AuthCtrl', ['$scope', 'Authentication', AuthCtrl]);
 })();
