'use strict';

angular.module('myApp.view1', ['ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sign_in', {
    templateUrl: 'view1/view1.html',
    controller: 'LoginCtrl'
  });
}])
.controller('LoginCtrl', ['$scope','$auth', function($scope, $auth){
      $scope.credentials = {}

      $scope.login = function(credentials){
        $auth.submitLogin(credentials)
            .then(function(rsp){
              console.log(rsp);
            })
            .then(function(rsp){
              console.log(rsp);
            })
      }
    }]);