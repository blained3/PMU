'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('ProfileCtrl', function ($scope, $location) {
        $scope.goToStatusPage = function(){
        	$location.path("/status");
        }
    });
