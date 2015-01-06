'use strict';

console.log('fsdhksdf');

angular.module('myApp.view3', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
        console.log($routeProvider);
        $routeProvider.when('/register',
            {
                templateUrl: 'view3/view3.html',
                controller: 'RegisterCtrl'
            }
        );
    }])
.controller('RegisterCtrl', ['$scope','$auth', function($scope, $auth){
        $scope.credentials = {};
        $scope.register = function(credentials){
            console.log($auth);
            $auth.submitRegistration(credentials)
                .then(function(resp) {
                    // handle success response
                })
                .catch(function(resp) {
                    // handle error response
                });
        }
    }]);
