'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/status', {
        templateUrl: 'views/status.html',
        controller: 'StatusCtrl',
        controllerAs: 'status'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl',
        controllerAs: 'info'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('TopCtrl', function ($location, $scope) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
  })
  .service('LoginService', function(){
    var loggedIn = false;

    function isLoggedIn(){
      return loggedIn;
    }

    function logIn(){
      loggedIn = true;
    }

    return {
      isLoggedIn: isLoggedIn,
      logIn: logIn
    };
  });
