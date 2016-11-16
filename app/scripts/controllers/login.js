'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('LoginCtrl', function ($scope, $location, LoginService) {
        $scope.goBack = function(){
            LoginService.logIn();
            $location.path('/profile');
        };
    });
