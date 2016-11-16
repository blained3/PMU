'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('LoginCtrl', function ($scope, $location) {
        $scope.goBack = function(){
            $location.path('/profile');
        };
    });
