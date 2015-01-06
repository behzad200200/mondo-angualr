'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
  'ng-token-auth'
])
.config(function($authProvider){
      $authProvider.configure(
          {
            apiUrl: 'http://127.0.0.1:3000'
          }
      )
    })/*
.config(['$routeProvider',function($routeProvider){
      $routeProvider.when({
        templateUrl: '/sign_out',
        controller: ''
      })
    }])*/