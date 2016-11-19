'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('StatusCtrl', function ($location) {
    var id = $location.search();
    console.log(id);
  });
