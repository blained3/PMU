'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('ProfileCtrl', function ($scope, LoginService, $location) {
        if(!LoginService.isLoggedIn()){
            $location.path('/login');
        }
        $scope.goToStatusPage = function(){
        	$location.path("/status");
        }
    });
