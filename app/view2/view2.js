'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    resolve: {
      auth: function($auth){
        return $auth.validateUser();
      }
    }
  });
}])

.controller('View2Ctrl', function($scope, auth) {
    if (auth.signedIn === true){
      $scope.message = 'yes you did this.'
    }else{
      $scope.message = 'sorry you couldnot do this';
    }
});