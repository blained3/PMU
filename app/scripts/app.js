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
    'mdPickers',
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
  })
  .service('IDService', function(){
    var id = '';

    function getID(){
      return id;
    }

    function setID(id2){
      id = id2;
    }

    return {
      getID: getID,
      setID: setID
    };
  });

var config = {
    apiKey: "AIzaSyASk9sXM9NW_lNAd_0-rvI13j6OEjU7IGw",
    //authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://newlegogroup.firebaseio.com/"
};
firebase.initializeApp(config);
