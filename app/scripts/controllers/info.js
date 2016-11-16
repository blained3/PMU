'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('InfoCtrl', function ($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
